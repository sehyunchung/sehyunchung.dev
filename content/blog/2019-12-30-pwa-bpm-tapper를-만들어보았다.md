---
title: PWA BPM Tapper를 만들어보았다
date: 2019-12-29T09:29:38.867Z
description: PWA가 '앱처럼 동작'하려면 무엇무엇을 추가해줘야 할 지 알아보자
---
## **BPM Tapper?**  
> BPM Tapper; 음악에 맞춰 탭하면 BPM(Beats Per Minute)을 표시해주는 무언가

디제잉을 하다보면 종종 모르는 곡의 BPM을 알아내야 할 때가 생기는데(바이닐 쓰시는 분이랑 백투백을 한다던지), 여기저기 찾아봐도 맘에 들게 생긴게 없어서 BPM 태퍼를 만들어 써야겠다는 생각을 해왔고, 이번에 좀 시간이 나서 만들어봤다. 오프라인 상황이 종종 있을 것 같고 최근에 트위터라던가 이런저런 PWA를 설치해서 쓰는 데 좀 맛이 들려서(..) PWA로 만들어보았다.

사용한 기술 머시기들은 아래와 같다.

- typescript - 그냥
- react - 써본지 오래돼서 리프레쉬 삼아
- emotion - 안써봐서 써보고 싶었음
- react-spring - 역시 써보고 싶었음

그리하여 일단 1차 완성된 웹앱 링크 ➡️ [`https://bipi.me`](https://bipi.me) 뭘 하든 제대로 하는 게 좋으므로 커스텀 도메인도 달았다..  
코드는 깃헙에 ➡️ [`https://github.com/sehyunchung/bipi`](https://github.com/sehyunchung/bipi)

PWA로 만들면서 중요하게 생각했던 것은,
- 당연하지만 **오프라인**에서 작동한다.
- 폰/패드의 홈스크린에 추가하면 페이지의 스샷이 아니라 **앱 아이콘**으로 표시된다.
- 앱아이콘을 터치해서 실행하면 사파리나 크롬으로 이동하는 게 아니라 **스탠드얼론**으로 실행된다.
- 기기의 **상태바**가 검은색이나 흰색이 아니라 앱 배경색에 맞게 스타일링 된다.

뭐든 예쁜게 좋으니깐..

## 오프라인에서 동작하게 만들기
서비스워커다. 이건 뭐 한게 없고 create-react-app 에서 만들어주는 `index.tsx` 맨 마지막 줄을 바꿔주기만 하면 된다.
```diff
--- serviceWorker.unregister()
+++ serviceWorker.register()
```

## 앱 아이콘 추가하기
## 스탠드얼론 앱으로 실행되게 만들기
## 상태바 스타일링되게 하기
## 추가로 해볼 것들
- 스플래시 화면
- Add to Homescreen Call to Action 달아보기

## References
