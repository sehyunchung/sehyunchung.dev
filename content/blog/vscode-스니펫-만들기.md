---
title: VSCode 스니펫 만들기 + emmet 설정 켜기
date: 2020-05-03T15:11:04.791Z
description: 손이 많이 가는 친구(ReasonML)를 위해
tags:
  - vscode
  - visual studio code
  - productivity
  - dx
  - reasonml
---
## ReasonML(!?)

연휴 기간 동안 [ReasonML](https://reasonml.github.io/en/)/[ReasonReact](https://reasonml.github.io/reason-react/)를 건드려보고 있는데(옆걸음질도 가지가지... 이지만 솔직히 재밌다.), 좀 귀찮은 부분들이 있었다.

그 중 대놓고 불편한 것들을 좀 꼽아봤더니:

1. Reason으로 React를 쓰면서 텍스트를 입력하려면 무조건 `React.string("string")` 이라는 함수를 써야 한다.
2. 이것만 해도 손이 많이 가는데 한글을 쓰려면 그냥 `"string"` 으로는 안되고 이런 기괴한 것 `{j|string|j}`(😱)을 써야 한다.
3. `emmet` 설정이 안되어있어 JSX 입력이 귀찮다.

손이 좀 많이 귀찮았고.. 그래서 기왕 옆걸음질 하는 김에, 불편한 것들부터 처리해보았다.

## 스니펫을 만들어보자

1, 2는 스니펫을 만들어서 처리했다. 따로 만들어본적은 없었는데, 딱히 어렵지 않았다.

### 1. snippet 메뉴를 열어보자

`cmd + shift + p` 를 눌러 만능창(..)을 열고 `sni..` 정도만 입력하면 아래와 같이 유저 스니펫 메뉴를 열 수 있다.

![만능창 최고](/img/screen-shot-2020-05-04-at-12.42.00-am.png)

### 2. `reason.json`으로 가자

엔터를 치고 역시 `rea..` 쯤 입력하면 `reason.json`이 나온다.

![](/img/screen-shot-2020-05-04-at-12.43.42-am.png)

또 엔터를 치자.

### 3. 스니펫을 만들자

이제부터 스니펫을 만들 수 있는데, 아래와 같이 엄청 간단하게 되어있다. 

```json
{
  "스니펫 이름": {
    "prefix": "스니펫 단축키",
    "body": [
      "여기서부터",
      "코드를 입력하면 된다.",
      "아이템 하나 당 한 줄이다.",
      "그리고 얘들은 대충 포지션이라고 생각하면 된다. $1, $2, $3, $4",
      "tab을 칠 때 순서대로 위의 애들 위치로 커서가 이동한다."
    ],
    "description": "설명인데 어차피 나혼자 쓸 것이므로 안써도 된다."
  }
}
```

#### 4. 그래서 무슨 스니펫을 만들었냐면

일단 코드는 아래와 같다. 요렇게 하면 어떻게 되나면,

```json
{
  "Simple String": {
    "prefix": "ss",
    "body": "{React.string(\"$1\")}",
    "description": "스트링 편하게 쓸란다.."
  },
  "Weird String": {
    "prefix": "ws",
    "body": "{React.string({j|$1|j})}",
    "description": "편하게..."
  }
}
```

1. 간단한 스트링을 입력하기 위해 `ss`를 치고 다시 엔터를 치면 `React.string("")` 이 나오고 `""` 사이에 커서가 들어가게 된다.
2. 한글 등 미묘한 스트링을 입력하기 위해 `ws`를 치고 다시 엔터를 치면 `React.string({j||j})` 이 나오고 `||` 사이에 커서가 들어가게 된다.

![감동실화1](/img/snip.gif "감동실화1")

<p align="center">감동실화...</p>

## emmet 설정을 해보자

이건 더 쉬운데, `settings.json`을 열고 아래와 같이 입력하면 된다.

```json
{
  "emmet.includeLanguages": {
    "reason": "javascriptreact"
  }
}
```

되나?

![감동실화2](/img/emmet.gif "감동실화2")

<p align="center">된다.</p>

(끝)
