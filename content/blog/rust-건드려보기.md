---
title: rust 건드려보기
date: 2020-04-26T12:01:20.258Z
description: 일단 해보자
tags:
  - rust
  - bipi
---
뭐 걍.. 저수준 언어를 해보고 싶기도 하고 wasm 도 좀 만져보고 싶어서 이것저것 건드려보는 중이다. 책도 보고 있긴 한데, 코드를 일단 짜봐야 감이 오는 것이 있으니 일단 최근에 만들었던 bpm tapper의 코어 로직 부분을 rust 로 옮겨보았다.

원래 타입스크립트 코드는 이랬다. bpm 관련 동작/계산을 담당하는 간단한 `Tapper` 클래스를 만들었고, `tap()` ,`reset()` 메소드, 계산된 bpm을 얻는 `bpm()` getter로 이루어져있다.

```ts
export class Tapper {
  private static instance: Tapper
  private cue: number[] = []

  public static new() {
    if (!Tapper.instance) {
      Tapper.instance = new Tapper()
    }
    return Tapper.instance
  }

  tap() {
    let cur = Date.now()
    let last = this.cue[this.cue.length - 1]

    if (cur - last > 2000) {
      this.reset()
    }

    this.cue.push(cur)
  }

  reset() {
    this.cue = []
  }

  get bpm() {
    if (this.cue.length < 2) return 0

    let beatCount = this.cue.length - 1
    let duration = this.cue[0] - this.cue[this.cue.length - 1]

    let averageBpm = 60000 * beatCount / duration

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

`Vec`은 Vector의 줄임으로, JS/TS의 Array라고 생각하면 된다. type 지정은 TS랑 형태가 같아서 별다른 설명은 필요없을 것 같다. 이제 메소드들을 추가해보자.

## 메소드 추가하기

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

나머지 메소드들도 추가해보자.


```rust
use chrono::Utc;

struct Tapper {
    cue: Vec<i64>,
}

impl Tapper {
    fn new() -> Tapper {
        Tapper { cue: vec![] }
    }

    fn tap(&mut self) {
        let ms = Utc::now().timestamp();
        self.cue.push(ms);
    }

    fn reset(&mut self) {
        self.cue = vec![]
    }

    fn get_bpm(&self) -> i64 {
        let cue = &self.cue;
        let beats = cue.len() - 1;
        let duration = cue[0] - cue[cue.len() - 1];
        let average_bpm = 60000 * beats as i64 / duration;
        return average_bpm;
    }
}
```
