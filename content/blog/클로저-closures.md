---
title: 클로저 Closures
date: 2020-04-12T12:27:27.173Z
description: 그래서 이걸 어디다 쓴다는 거요
tags:
  - closures
  - javascript
  - fp
---
## 클로저?

클로저가 뭔지 굳이 여기서 또 설명할 필요는 없을 것 같다. 대신 [MDN의 설명](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)을 인용한다.

> A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
>
>
> **클로저**는 어떤 함수와 그를 둘러싼 상태(**렉시컬 환경**이라고도 하는)의 조합입니다. 다시 말해, 클로저는 내부 함수가 외부 함수의 스코프를 액세스하게 해줍니다. 자바스크립트에선 함수가 생성될 때마다 클로저도 매번 만들어집니다.

## 그래서?

아무튼, 워낙에 관련한 글도 많고, 면접 문제로도 많이 쓰이는데, 대체 이걸 어디다 쓴다는 건지, 이게 나의 개발 인생에 어떤 도움을 준다는 것인지 알려주는 글은 그리 많지 않은 것 같다. 있다 해도 대부분,

* private field 흉내내기
* for loop 내에서 index 변수를 사용하는 함수를 사용할 경우

등의 내용이 주를 이루는데, 보통은 언어 스펙에 관련 feature가 추가되어 별 의미가 없어졌거나, 해당하는 usecase를 현실에서 만날 일이 거의 없거나 하는 경우가 많은 것 같다.

## Real World Examples

하여, 개발하는데 실제로 유용하게 쓰이는 예들을 나열해보면 좋을 것 같았다. "Real World Closure" 랄까. 아무튼, 현재까지 발견한 예들은 아래와 같다.

### Curried Functions

커리된 함수란 복수개의 파라미터를 받는 함수가 파라미터를 모두 받지 못했을 경우, 나머지 파라미터를 받는 함수를 리턴하는 경우를 말한다. 스트링 x와 y를 받아 스트링 `I ${x} you ${y}.`를 반환하는 함수를 커리된 함수로 만들면, 아래와 같을 것이다.

```js
const curriedIXYouY = x => y => `I ${x} you ${y}.`
```

혹은, [Ramda](https://ramdajs.com/) 같은 함수 라이브러리를 사용할 수도 있다.

```js
import * as R from 'ramda'

const iXYouY = (x, y) => `I ${x} you ${y}.`
const curriedIXYouY = R.curry(iXYouY)
```

그리고 아래와 같이 사용할 수 있다.

```js
const iLoveYou = curriedIXYouY('love')
iLoveYou(3000) // 'I love you 3000.'
```

> 여기서 클로저는? 처음에 부분적으로 받은 파라미터 `x('love')`와 그것을 사용하는 반환된 함수 `iLoveYou`.

### Factory Functions

예를 들어, Axios를 이용해 API service를 만드는 함수를 만드는데 API가 여러 종류인 상황이라고 하자. 매번 세팅을 해주기 보다 Axios Instance를 몇 개 만들어 사용하면 좋을 것 같다. 

```js
import axios from 'axios'

const instanceA = axios.create({
  baseURL: ...,
  timeout: ...,
  headers: ...
});

const instanceB = axios.create({
  baseURL: ...,
  timeout: ...
  headers: ...
});
```

그리고 요 인스턴스를 받아 `get`, `post` 등의 메서드를 가진 오브젝트를 반환하게 만들 수 있을 것이다.

```js
const apiServiceFactory = axiosInstance => ({
  get(slug) {
    return axiosInstance.get(slug)
  },
  post(slug, payload) {
    return axiosInstance.post(slug, payload)
  },
  // ...patch, delete etc.
})
```

그리고 아래와 같이 사용할 수 있을 것이다.

```js
const apiServiceA = apiServiceFactory(instanceA)
const apiServiceB = apiServiceFactory(instanceB)

apiServiceA.get(...) // instanceA를 사용
apiServiceB.get(...) // instanceB를 사용
```

> 여기서 클로저는? 인자로 넘어온 axios instance와 반환된 오브젝트의 메서드들.

### expect

이것도 뭐 팩토리 함수의 예라고 해도 될 것 같은데 약간 사용하는 형태가 다른 것 같아 따로 빼봤다. 테스트 라이브러리에서 자주 보는 `expect` 함수도 클로저의 좋은 용례다. 아주 간략하게 `expect` 함수를 만들어보면 아래와 같을 것이다.

```js
const expect = actual => ({
  toBe(expected) {
    if (actual !== expected) {
      console.error(`FAIL! ${actual} !== ${expected}`)
      return
    }
    console.log('SUCCESS!')
  }
})
```

그리고 아래와 같이 사용할 수 있을 것이다.

```js
expect(10).toBe(3) // FAIL! 10 !== 3
expect(10).toBe(10) // SUCCESS!
```

> 여기서 클로저는? `expect`에 넘겨준 `actual` 값과 반환된 오브젝트의 메서드 `toBe`.

### Hooks

가장 피부에 와닿는 예일텐데, React의 Hooks도 클로저의 대표적인 용례다. 역시 아주 간단하게 `useState` 비슷한 것을 만들어보면 대충 아래와 같을 것이다. [swxy의 유명한 블로그 글](https://www.swyx.io/writing/getting-closure-on-hooks/)에서 본 코드다.

```js
const useState = initialValue => {
    let _val = initialValue
    const state = () => _val
    const setState = newVal => {
      _val = newVal
    }
    return [state, setState]
  }
}
```

아주 단순한 버전이고 사용법도 약간 다르지만(state가 함수의 형태이고) 써보면 아래처럼 된다.

```js
const [foo, setFoo] = useState(0)
console.log(foo()) // 0
setFoo(1)
console.log(foo()) // 1
```

> 여기서 클로저는? 처음에 넘겨준 `initialValue`와 그것을 사용하는 `state`와 `setState` 이겠.

(끝)
