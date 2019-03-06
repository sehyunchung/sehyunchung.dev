---
title: CSS(만으)로 스티키 헤더에 그림자 넣기
date: '2019-03-04T23:46:37.121Z'
description: 'CSS만으로 동적인 뭔가를 구현하는 간단한 방법 중 하나'
tags: ['css', 'position: sticky']
---

(물론 이런저런 CSS 프레임워크를 쓰면 그냥 해결될 문제이지만) 아래와 같은 효과를 구현해야 할 경우,

![c770d402-f4bb-4567-91c6-3e304d27df0a.gif](https://images.velog.io/post-images/sxhx/6015c520-3dc2-11e9-8c52-db8d9435c744/c770d402-f4bb-4567-91c6-3e304d27df0a.gif)

보통 `clientHeight`과 `scrollHeight`등으로 높이를 계산한다던가 좀 더 스마트하게 [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#A_simple_example)를 사용한다던지 하는 자바스크립트로 해결을 하는 방법이 생각나는데, CSS만으로 때울 수 있는 방법이 있었다.

_(일단 세로로 스크롤이 되고 있다는 전제 하에)_

1. 필요한 html요소들을 아래와 순서로 배열한다.

```html
<div class="header">헤더</div>
<div class="shadow">그림자</div>
<div class="shadow-cover">가리개</div>
<div class="main">본문</div>
```

2. 각 요소에 포지션 속성을 아래와 같이 부여한다.

```css
.header {
  z-index: 1;
  position: sticky;
  top: 0;
  height: 50px; /* (임의의 값임) */
}
.shadow {
  position: absolute;
  top: 50px; /* .header 높이랑 같은 값 */
  height: 4px; /* 그림자 높이 */
  background-image: linear-gradient(
    to bottom,
    #777,
    rgba(0, 0, 0, 0)
  ); /* 그림자용 그래디언트 */
}
.shadow-cover {
  position: sticky;
  top: 0;
  height: 4px; /* 그림자 높이 */
  background: #fff; /* 배경색과 같은 색 */
}
.main {
  ...;
}
```

이렇게 하면 끝이다.😯 어떻게 굴러가는 것인지 살펴보면,

일단 헤더가 모든 것 위에 와야 하므로 `z-index` 값을 제일 높게 주었다. 그리고 헤더의 아래에 그림자를 `absolute` 포지션을 이용해 붙여준다.

그 아래 그림자 가리개는 `sticky`를 주었으므로 같은 `sticky`인 헤더 바로 밑, 그러니까 그림자와 같은 위치에 놓이는데, `z-index` 값이 특별히 따로 지정되지 않으면 `sticky`는 `absolute` '위'에 위치하게 되므로 스크롤이 시작되기 전엔 그림자를 가리고 있게 된다.

![2.jpg](https://images.velog.io/post-images/sxhx/8958f3a0-3dd4-11e9-9d6c-bf6354f57566/2.jpg)

스크롤이 시작되면 그림자 가리개의 `top`값이 `0`이었므로 헤더 밑으로 스크롤되어 올라가게되고, 그 아래 있던 그림자가 아래와 같이 드러나게 된다.

![3.jpg](https://images.velog.io/post-images/sxhx/acd608e0-3dd4-11e9-8503-2572238e9a09/3.jpg)

움직이는 그림으로 보면 아래와 같다.

![header.gif](https://images.velog.io/post-images/sxhx/b9b050f0-3dd1-11e9-9d6c-bf6354f57566/header.gif)

복잡한 조건이 필요하지 않은 경우라면 가볍게 쓸만한 꼼수였다✨

+
[codepen 링크](https://codepen.io/sxhyxnchxng/pen/Mxydmq?editors=1100)
