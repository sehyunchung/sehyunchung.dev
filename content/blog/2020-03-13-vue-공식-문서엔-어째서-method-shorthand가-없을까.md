---
title: Vue 공식 문서엔 어째서 method shorthand가 없을까
date: 2020-03-13T01:25:11.201Z
description: 공식 문서 저장소에 물어봤다
---
Vue.js 공식 문서의 예제들을 보면 computed나 method등에 method shorthand를 사용하지 않고 있다. 예를 들어 [computed를 설명하는 예제](https://vuejs.org/v2/guide/computed.html#Basic-Example)를 보면,

```js
computed: {
  // a computed getter
  reversedMessage: function () {
    // `this` points to the vm instance
    return this.message.split('').reverse().join('')
  }
}
```

위와 같이 reversedMessage()가 아니라 reversedMessage: function()을 쓰고 있다. 어째서일까?
여기저기 검색해봐도 나오는 게 없고 수상한 추측 뿐이어서, 내친 김에 [공식 문서 저장소](https://github.com/vuejs/vuejs.org)에 질문을 달아보았다.

[https://github.com/vuejs/vuejs.org/issues/2526](https://github.com/vuejs/vuejs.org/issues/2526) 

15분도 안돼서 답변이 달리고 closed 되었는데[^1], 위 링크에서 확인할 수 있듯, Vue 2.x는 공식적으로 IE 11을 지원하고 있고, 예제를 적용하면 어떤 환경에서든 그대로 잘 돌아가길 원했기 때문에, method shorthand를 사용하지 않고 있다는 만족스러운 답변[^2]을 얻을 수 있었다.

[^1]: 어째서 이런 이중 수동이 더 자연스럽게 느껴지는 것일까?
[^2]: 확실히 찾아보니 화살표 함수도 쓰지 않고 있었다. 
