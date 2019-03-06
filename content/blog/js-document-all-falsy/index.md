---
title: document.all은 falsy
date: '2018-11-06T23:46:37.121Z'
description: 'document.all이 어째서 falsy인가 하는 점에 대한 뻘글'
tags: ['javascript', 'document.all', 'sad']
---

`document.all`은 `HTMLAllCollection`(페이지의 모든 html요소가 들어있는 유사 배열)을 반환하는 속성이다. 쓰지 않는 것이 좋지만 콘솔에 쳐보면 동작은 한다. 그런데, 다시 콘솔에 `!!document.all`을 쳐보면 `false`가 튀어나온다. falsy는 아닐 것 같은데 대체 왜일까?

검색해보니 [이런 사연](https://stackoverflow.com/a/10394873/8994411) 을 찾을 수 있었다. 그러니까 `document.all`은 아래와 같이 구버전 브라우저 검사에 사용되어왔고,

```js
if (document.all) {
  // 고리짝 브라우저에서 실행
} else if (document.getElementById) {
  // “모던” 브라우저에서 실행
}
```

대부분의 브라우저들이 하위호환 이슈 때문에 쩔 수 없이 `document.all`을 지원하고 있는 관계로 `document.all`이 truthy 이면 `else if` 블록의 코드가 실행되지 않는다는 이슈가 있었고, 그래서 falsy로 해둘 수 밖에 없었다는 슬픈 이야기.

물론,

```js
if (document.getElementById) {
  // “모던” 브라우저에서 실행
} else if (document.all) {
  // 고리짝 브라우저에서 실행
}
```

이렇게 하면 해결될 문제이지만 그냥 위의 코드를 쓰고 있는 경우가 많아 역시 falsy 로 해둘 수 밖에 없었다고.

😩
