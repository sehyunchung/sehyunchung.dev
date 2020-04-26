---
title: rust 건드려보기
date: 2020-04-26T12:01:20.258Z
description: 일단 도전!
tags:
  - rust
  - bipi
---
뭐 걍.. 저수준 언어를 해보고 싶기도 하고 wasm 도 좀 만져보고 싶어서 이것저것 건드려보는 중이다. 책도 보고 있긴 한데, 코드를 일단 짜봐야 감이 오는 것이 있으니 일단 최근에 만들었던 [bpm tapper](https://github.com/sehyunchung/bipi)의 코어 로직 부분을 rust 로 옮겨보았다.

원래 타입스크립트 코드는 이랬다. bpm 관련 동작/계산을 담당하는 간단한 `Tapper` 클래스를 만들었고, `tap()`,`reset()` 메소드, 계산된 bpm을 얻는 `bpm()` getter로 이루어져있다.

```ts
export class Tapper {
  private static instance: Tapper
  private cue: number[] = []

  /**
   * ## `Tapper.new()`
   * Tapper 인스턴스를 생성한다.
   */
  public static new() {
    if (!Tapper.instance) {
      Tapper.instance = new Tapper()
    }
    return Tapper.instance
  }

  /**
   * ## `tap()`
   * `bpm` 계산을 위해 현재 시간의 `timestamp`를 `this.cue`에 `push` 한다.
   * 바로 전 tap과의 시간차가 2초를 초과하면 `this.reset`을 호출한다.
   */
  tap() {
    let cur = Date.now()
    let last = this.cue[this.cue.length - 1]
    if (cur - last > 2000) {
      this.reset()
    }
    this.cue.push(cur)
  }

  /**
   * ## `reset()`
   * `bpm`을 리셋하기 위해 `this.cue`를 비운다.
   */
  reset() {
    this.cue = []
  }

  /**
   * ## `bpm`
   * 계산된 `bpm`을 액세스하기 위한 `getter`.
   * `tap`수를 첫 `tap`과 마지막 `tap` 사이의 시간으로 나눈 값 * 1분을 소숫점 첫째자리까지 계산한 `bpm`을 반환한다.
   * `this.cue` 의 `length`가 2보다 작으면 0을 반환한다.
   */
  get bpm() {
    if (this.cue.length < 2) return 0

    let beatCount = this.cue.length - 1
    let first = this.cue[0]
    let last = this.cue[this.cue.length - 1]
    let averageBpm = (60000 * beatCount) / (last - first)

    return Math.round(averageBpm * 10) / 10
  }
}
```

그럼 한 부분씩 rust로 옮겨보자.

## Tapper struct 선언하기

일단, Rust엔 `class` 가 없다. 비슷한 느낌의 `struct` 가 있는데, 사용하는 방식이 좀 다르다. 처음 선언하는 방법은 `interface` 같은 느낌으로, struct가 가진 프로퍼티의 타입을 지정해준다. 일단 해보면 아래와 같다.

```rust
struct Tapper {
    cue: Vec<i64>
}
```

`Vec`은 Vector의 줄임으로, 대충 JS/TS의 Array라고 생각하면 된다. type 지정은 TS랑 형태가 같아서 별다른 설명은 필요없을 것 같다. 이제 메소드들을 추가해보자.

## 메소드 추가하기

### `new()`
메소드를 struct 구문 내에 바로 추가할 수 없고, `impl` 키워드를 사용해서 `struct` 에 속한 함수들의 목록을 따로 만드는 느낌이다. 역시 코드로 보는 편이 빠르겠다. 일단 `Tapper` 인스턴스를 만드는 `new()` 메소드를 추가해보면 아래와 같다.

```rust
impl Tapper {
    fn new() -> Tapper {
        Tapper { cue: vec![] }
    }
}
```

위와 같이 `struct` 앞에 `impl`(implement의 줄임이겠다) 키워드를 사용하고 코드 블록 안에 함수를 추가하면 된다.

다른 얘기지만 `rust` 는 키워드들이 참 취향인데, 함수 선언 키워드는 간지나게도 `fn` 이다. `function`도 아니고 `func` 도 아니고 `fun` 도 아니고 `fn`!

함수 선언은 여러 괄호/중괄호형 언어들과 비슷하다.

```rust
fn 함수명() -> 리턴 타입 {
    이것저것
}
```

### `tap()`
나머지 메소드들도 추가해보자. 다음은 `tap()`인데, JS처럼 대충 `Date.now()`를 할 순 없고, 외부 라이브러리를 이용해야 한다. 유닉스 타임스탬프를 얻으려면 어떻게 해야 되나 알아보니 [`chrono`](https://docs.rs/chrono/0.4.11/chrono/)라는 Crate(외부 라이브러리라고 생각하면 된다)가 있었고, 아래와 같이 구현이 가능했다.

```rust
use chrono::Utc;

impl Tapper {
    ...
    fn tap(&mut self) {
        let ms = Utc::now().timestamp();
        self.cue.push(ms);
    }
}
```
파라미터로 들어오는 `&mut self`는 제대로 설명하자면 좀 길어질 것 같고(Rust엔 가비지컬렉터가 없고... 오너십이라는 게 있고... 바로잉이라는 게 있고...), 간략히 설명하자면,
1. 일단 struct의 메소드는 기본적으로 `self`라는 파라미터를 받게 되어있다(`new()는 예외`). JS의 `this`와 같은 용도이지만 위와 같이 명시적으로 써주어야 한다.
1. 그렇게 `self`를 받는데, 앞의 `&`은 레퍼런스라는 뜻이다. Tapper struct의 참조 주소를 self에 바인딩 한다는 의미라고 대충 생각할 수 있다.
1. `&mut` 라고 해준 것은 self.cue가 변경되기(mutate) 때문인데, 이후 `get_bpm()` 차례에 같이 설명하는 것이 좋을 것 같다.

### `reset()`
요건 뭐 간단하게,
```rust
impl Tapper {
    ...
    fn reset(&mut self) {
        self.cue = vec![]
    }
}
```
요렇게 하면 된다. 위의 `vec!`은 매크로라고 하는 것인데... 아무튼 빈 vector를 생성하는 기능이라고 생각하면 된다.

### `get_bpm()`
마지막으로 bpm을 구하는 함수다.
