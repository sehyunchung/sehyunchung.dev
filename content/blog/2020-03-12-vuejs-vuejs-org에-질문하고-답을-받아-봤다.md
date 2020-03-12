---
title: vuejs/vuejs.org에 질문하고 답을 받아 봤다
date: 2020-03-12T13:49:28.964Z
description: 대답이 15분 만에 왔다.
---
 Vue.js 공식 사이트의 예제들을 보면 `computed`나 `method`등에 method shorthand를 사용하지 않고 있다. 예를 들어 공식 문서에서 `computed`를 설명하는 예제를 보면,

```js
computed: {
  // a computed getter
  reversedMessage: function () {
    // `this` points to the vm instance
    return this.message.split('').reverse().join('')
  }
}
```

위와 같이 `reversedMessage()`가 아니라 `reversedMessage: function()`를 쓰고 있다. 어째서일까? 지금은 2020년인데?

여기저기 검색해봐도 나오는 게 없고, 아무도 만족스러운 답변을 주지 않아서, 공식 채널에 질문을 하기로 했다. 하여, [vuejs/vuejs.org](https://github.com/vuejs/vuejs.org)에 질문을 달아보았다.

[https://github.com/vuejs/vuejs.org/issues/2526](https://github.com/vuejs/vuejs.org/issues/2526)

15분도 안돼서 답변이 달리고 closed 당했는데, 위 링크에서 확인할 수 있듯, Vue 2.x는 공식적으로 IE 11을 지원하고 있고, 어떤 상황이든 예제를 적용하면 그대로 돌아가길 원했기 때문에 method shorthand를 사용하지 않았다는 만족스러운 답변을 얻을 수 있었다.
