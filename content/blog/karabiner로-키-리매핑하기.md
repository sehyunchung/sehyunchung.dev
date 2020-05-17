---
title: Karabiner로 키 리매핑하기
date: 2020-04-29T13:13:35.932Z
description: 손 포지션을 바꾸지 않기 위한 몸부림
tags:
  - karaviner
  - hjkl
  - vim
---
현재 메인 에디터로 vscode에 [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)을 설치해서 사용하고 있다. 터미널 vim에도 [이런저런 세팅](https://github.com/sehyunchung/dotfiles/blob/master/nvim/init.vim)을 해놔서 거의 비슷하게 돌아가고 있긴 하지만 live share 등 이런저런 편의성 때문에 왠지 vscode를 더 자주 켜게 되는 것 같다.

vim은 처음엔 좀 황당할 수 있지만 조금이라도 적응이 되고 나면 매우 편해지는 부분들이 있고, 일단 오른손 포지션을 옮겨서 방향키를 쓰고 싶지 않게 되는 부작용?이 있다. 브라우저엔 vimium등을 설치해서 많은 부분 해결할 수 있지만 기본적으로 모든 부분에서 vim 키바인딩을 사용하고 싶으면 어떻게 해야 하는지 좀 알아보다가 [karabiner-element](https://karabiner-elements.pqrs.org/)라는 툴을 알게됐다.

간단히 설명하자면 키바인딩을 커스텀하게 해주는 프로그램이다.