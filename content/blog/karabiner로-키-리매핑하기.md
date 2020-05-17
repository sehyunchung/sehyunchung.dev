---
title: 손을 움직이지 않으려고
date: 2020-05-17T05:21:14.510Z
description: 손 포지션을 바꾸지 않기 위한 몸부림
tags:
  - karaviner
  - hjkl
  - vim
---
현재 메인 에디터로 vscode에 [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)을 설치해서 사용하고 있다. 터미널 vim에도 [이런저런 세팅](https://github.com/sehyunchung/dotfiles/blob/master/nvim/init.vim)을 해놔서 대충 비슷하게 돌아가고 있긴 하지만 live share 등 이런저런 편의성 때문에 왠지 vscode를 더 자주 켜게 되는 것 같다.

아무튼, vim은 처음엔 좀 당황스러울 수 있지만 죽치고 쓰다보면 어느 순간 익숙해져서, 모든 것을 키보드 위에서, 손 포지션을 바꾸지 않고 해결하고 싶어진다. 크롬에선 vimium등을 설치해서 많은 부분 해결할 수 있지만 다른 부분들에서 vim 키바인딩(최소 방향키만이라도)을 사용하고 싶으면 어떻게 해야 하는지 좀 알아보다가 [karabiner-element](https://karabiner-elements.pqrs.org/)라는 툴을 알게됐다.

## Karabiner Element
키바인딩을 커스텀하게 해주는 GUI 프로그램이다. 일단 아래 두 가지를 해봤다.

1. `esc`까지 손가락을 뻗기는 힘든 일이므로 `capslock`에 `esc`를 바인딩한다.
1. 약간 불편하긴 하지만 `left ctrl + hjkl`에 방향키를 바인딩한다.

1.은 esc가 터치바에 달려있는 구형 맥북프로에서도 요긴하게 쓸 수 있는 기능이다. 엄청 간단하게 설정할 수 있는데, [공식 사이트에서 스크린샷과 함께 설명](https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-simple-modifications/)하고 있다.

### Caps Lock에 Esc를 바인딩하기

1. Preferences를 연다.
1. 첫 메뉴인 Simple modifications를 연다. 사실 열려있다.
1. 기본모드는 "For all devices" 인데, 무슨 키보드를 연결해도 esc는 capslock에 바인딩할 것이므로 여기다 그냥 추가해도 된다.
1. 좌하단의 "Add item"을 클릭하면 화면 중앙 테이블에 row 아이템 하나가 생긴다.
1. "From key", "To key" 드롭다운이 보이는데 말 그대로 왼쪽 키에 오른쪽 키를 바인딩한다는 뜻이다.
1. "From key" 에서 `caps_lock`, "To key" 에서 `escape`를 선택해 간단히 완료.

### 왼쪽 컨트롤 + hjkl에 방향키 바인딩하기
Karabiner는 좋은 기능을 제공하는데, [Karabiner 사용자들이 공유한 rule들](https://ke-complex-modifications.pqrs.org/)을 쓸 수 있게 해두었다. 같은 기능을 누가 만들어놓은 것이 있어서 사용하기로 했다.

1. [https://ke-complex-modifications.pqrs.org/#ctrl_plus_hjkl_to_arrow_keys](https://ke-complex-modifications.pqrs.org/#ctrl_plus_hjkl_to_arrow_keys) 해당 rule의 link다. 클릭해서 들어가본다.
1. 좌상단의 "import"를 클릭한다.
1. 시키는대로 Karabiner로 간다.
1. import 버튼을 클릭해 import 한다.
1. enable 버튼을 클릭해 enable 한다.

