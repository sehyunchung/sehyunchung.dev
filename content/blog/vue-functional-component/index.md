---
title: Vue Functional Component
date: '2019-04-02T00:11:37.121Z'
description: 'Vue에도 함수형? 컴포넌트가 있다는 걸 뒤늦게 알았다.'
tags: ['vue', 'functional component']
---

Vue, 정확히는 Vue의 Single File Component에 Functional 옵션이 있다는 걸 몰랐는데, 트위터하다 지나가는 트윗을 보고 알게 되어(...) 적어본다.
일단 사용법이 뭔가 좋다. 아래와 같이 `<template>`에 `functional`이라고 쓰면 끝이다.

```html
<template functional>
  <!-- 😎 -->
</template>
```

일단 `<script>`가 없어도 그냥 동작한다! Vue 쓰면서 좀 귀찮았던 게 컴포넌트 이름을 일일이 알려줘야 하는 것이었는데, 안해도 되는 게 좋다. 좀 더 사용법이 잘 드러나는 예를 들어보면,

```html
<template>
  <child :text="text" :greet="greet" />
</template>

<script>
  export default {
    components: {
      child,
    },
    data() {
      text: 'hello'
    },
    methods: {
      greet() {
        alert('Hello!')
      },
    },
  }
</script>
```

컴포넌트 구조가 위와 같을 때, 자식 컴포넌트를 `functional`로 작성해보면 아래와 같다. 물론 컴포넌트 파일의 이름은 `child.vue`일 것이다.

```html
<template functional>
  <div @click="props.greet">
    {{ props.text }}
  </div>
</template>
```

위에서 얘기한대로 `<template>`만 작성하면 되고, 따로 `props`에 받는 prop들을 `props: ['text', 'greet']`등으로 등록하지 않아도 부모 컴포넌트가 넘겨주었다면 위와 같이 `props.xxx`로 액세스 할 수 있다. 뭔가 리액트 같고 좋다ㅋ.

재미있는 건 `parent`라는 속성으로 부모 컴포넌트의 속성들을 그대로 액세스 할 수 있다는 점인데, 아래와 같이 자식 컴포넌트에 아무것도 넘겨주지 않아도,

```html
<template>
  <child />
</template>
```

`parent` 속성을 사용하여 위의 `props`를 사용한 예와 같이 동작하게 할 수 있다.

```html
<template functional>
  <div @click="parent.greet">
    {{ parent.text }}
  </div>
</template>
```

일단 여기까지다. 번거로운 과정 없이 간단하게 사용할 수 있어 넘 좋다.😎
