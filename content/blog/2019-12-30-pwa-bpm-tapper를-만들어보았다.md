---
title: BPM Tapper를 PWA로 만들어보았다
date: 2020-03-08T14:29:00.000Z
description: PWA를 네이티브 앱처럼 보이게 만들기 위해 필요한 설정들
---
디제잉을 하다보면 종종 모르는 곡의 BPM을 알아내야 할 때가 생기는데(바이닐 쓰시는 분이랑 백투백을 한다던지), 여기저기 찾아봐도 맘에 들게 생긴게 없어서 BPM 태퍼를 만들어 써야겠다는 생각을 해왔고, 이번에 좀 시간이 나서 만들어보았다. 아무래도 오프라인 상황이 종종 있을 것 같고, 최근에 트위터라던가 이런저런 PWA를 설치해서 쓰는 데 좀 맛이 들려서(..) PWA로 만들어보기로. 회사에서 Vue 밖에 못써서 hooks도 써볼 겸 React로 만들어봤다.

그리하여 일단 완성된 앱은 이렇다:

> **웹앱** [`https://bipi.me`](https://bipi.me)\
> **깃헙** [`https://github.com/sehyunchung/bipi`](https://github.com/sehyunchung/bipi)

간단한 앱이다. 화면 아무곳을 3번 이상 탭하면 BPM을 계산해서 보여준다. 4초간 입력이 없으면 0으로 리셋.

## 해보고 싶었던 것들

PWA로 만들면서 중요하게 생각했던 것들은 아래와 같다.

* 당연하지만 **오프라인**에서 작동한다.
* 폰/패드/데스크탑에 설치하면 **앱 아이콘**이 표시된다.
* 앱아이콘을 터치해서 실행하면 브라우저로 이동하는 게 아니라 **스탠드얼론**으로 실행된다.
* 폰/패드에 설치할 경우 **상태바**가 검은색이나 흰색이 아니라 **앱 배경색에 맞게** 스타일링 된다.

다시 말해, 네이티브앱 경험에 최대한 가깝게 만들어보고 싶었다.

## 1. 오프라인에서 동작하게 만들기

서비스워커를 설정해주면 된다. 따로 한 건 없고 `create-react-app`에서 만들어주는 `index.tsx`의 맨 마지막 줄을 바꿔주기만 했다.

```diff
...
- serviceWorker.unregister()
+ serviceWorker.register()
...
```

## 2. 앱 아이콘 추가하기

여기서부턴 `manifest.json`에 설정을 추가하면 된다. `manifest.json`에서 앱아이콘을 설정하는 부분은 `"icons"` array다.

```diff
{
...
+    "icons": [{
+            "src": "favicon.ico",
+            "sizes": "64x64 32x32 24x24 16x16",
+            "type": "image/x-icon"
+        },
+        {
+            "src": "logo192.png",
+            "type": "image/png",
+            "sizes": "192x192"
+        },
+        {
+            "src": "logo512.png",
+            "type": "image/png",
+            "sizes": "512x512"
+        }
+    ],
...
}
```

## 3. 스탠드얼론 앱으로 실행되게 만들기

`manifest.json`에서 앱 바디가 어떻게 보이느냐를 설정하는 부분은 `"display"`다. 아래와 같이 `standalone`으로 설정했다.

```diff
{
...
+    "display": "standalone",
...
}
```

`display`의 설정값들과 설정시 화면 동작은 아래와 같았다.

| 프로퍼티         | 설정시 화면 동작                                                        |
| ------------ | ---------------------------------------------------------------- |
| `browser`    | 디폴트 브라우저 화면                                                      |
| `fullscreen` | 브라우저인데 ui가 안보이는 브라우저 화면 ..이라고 되어있는데 iOS에선 `browser`랑 차이가 없었다.    |
| `minimal-ui` | 스탠드얼론이랑 거의 같은데 메뉴바에 약간의 ui 컨트롤이 있음 ..이라고 되어있는데 iOS에선 역시 차이가 없었다. |
| `standalone` | 스탠드얼론 화면.                                                        |

> [android에선 되나봄..](https://superpwa.com/doc/web-app-manifest-display-modes/https://superpwa.com/doc/web-app-manifest-display-modes/)

## 4. 상태바 스타일링되게 하기

안드로이드/크롬에선 기본적으로 특별히 설정하지 않아도 그냥 되지만, iOS 기기는 따로 설정을 해주어야 한다. `index.html`의 `<head>` 영역에 아래코드를 추가한다.

```diff
+    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

역시 정리해 본 `디제잉을 하다보면 종종 모르는 곡의 BPM을 알아내야 할 때가 생기는데(바이닐 쓰시는 분이랑 백투백을 한다던지), 여기저기 찾아봐도 맘에 들게 생긴게 없어서 BPM 태퍼를 만들어 써야겠다는 생각을 해왔고, 이번에 좀 시간이 나서 만들어보았다. 아무래도 오프라인 상황이 종종 있을 것 같고, 최근에 트위터라던가 이런저런 PWA를 설치해서 쓰는 데 좀 맛이 들려서(..) PWA로 만들어보기로. 회사에서 Vue 밖에 못써서 hooks도 써볼 겸 React로 만들어봤다.

그리하여 일단 완성된 앱은 이렇다:

> **웹앱** [`https://bipi.me`](https://bipi.me)\
> **깃헙** [`https://github.com/sehyunchung/bipi`](https://github.com/sehyunchung/bipi)

간단한 앱이다. 화면 아무곳을 3번 이상 탭하면 BPM을 계산해서 보여준다. 4초간 입력이 없으면 0으로 리셋.

## 해보고 싶었던 것들

PWA로 만들면서 중요하게 생각했던 것들은 아래와 같다.

* 당연하지만 **오프라인**에서 작동한다.
* 폰/패드/데스크탑에 설치하면 **앱 아이콘**이 표시된다.
* 앱아이콘을 터치해서 실행하면 브라우저로 이동하는 게 아니라 **스탠드얼론**으로 실행된다.
* 폰/패드에 설치할 경우 **상태바**가 검은색이나 흰색이 아니라 **앱 배경색에 맞게** 스타일링 된다.

다시 말해, 네이티브앱 경험에 최대한 가깝게 만들어보고 싶었다.

## 1. 오프라인에서 동작하게 만들기

서비스워커를 설정해주면 된다. 따로 한 건 없고 `create-react-app`에서 만들어주는 `index.tsx`의 맨 마지막 줄을 바꿔주기만 했다.

```diff
...
- serviceWorker.unregister()
+ serviceWorker.register()
...
```

## 2. 앱 아이콘 추가하기

여기서부턴 `manifest.json`에 설정을 추가하면 된다. `manifest.json`에서 앱아이콘을 설정하는 부분은 `"icons"` array다.

```diff
{
...
+    "icons": [{
+            "src": "favicon.ico",
+            "sizes": "64x64 32x32 24x24 16x16",
+            "type": "image/x-icon"
+        },
+        {
+            "src": "logo192.png",
+            "type": "image/png",
+            "sizes": "192x192"
+        },
+        {
+            "src": "logo512.png",
+            "type": "image/png",
+            "sizes": "512x512"
+        }
+    ],
...
}
```

## 3. 스탠드얼론 앱으로 실행되게 만들기

`manifest.json`에서 앱 바디가 어떻게 보이느냐를 설정하는 부분은 `"display"`다. 아래와 같이 `standalone`으로 설정했다.

```diff
{
...
+    "display": "standalone",
...
}
```

`display`의 설정값들과 설정시 화면 동작은 아래와 같았다.

| 프로퍼티         | 설정시 화면 동작                                                        |
| ------------ | ---------------------------------------------------------------- |
| `browser`    | 디폴트 브라우저 화면                                                      |
| `fullscreen` | 브라우저인데 ui가 안보이는 브라우저 화면 ..이라고 되어있는데 iOS에선 `browser`랑 차이가 없었다.    |
| `minimal-ui` | 스탠드얼론이랑 거의 같은데 메뉴바에 약간의 ui 컨트롤이 있음 ..이라고 되어있는데 iOS에선 역시 차이가 없었다. |
| `standalone` | 스탠드얼론 화면.                                                        |

> [android에선 되나봄..](https://superpwa.com/doc/web-app-manifest-display-modes/https://superpwa.com/doc/web-app-manifest-display-modes/)

## 4. 상태바 스타일링되게 하기

안드로이드/크롬에선 기본적으로 특별히 설정하지 않아도 그냥 되지만, iOS 기기는 따로 설정을 해주어야 한다. `index.html`의 `<head>` 영역에 아래코드를 추가한다.

```diff
+    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

역시 정리해 본 설정값들과 설정시 화면 동작.

| 프로퍼티                | 설정시 화면 동작                     |
| ------------------- | ----------------------------- |
| `default`           | 상단에 상태바가 흰색 배경에 검은색 글자로 표시된다. |
| `black`             | 상단에 상태바가 검은색 배경에 흰색 글자로 표시된다. |
| `black-translucent` | 상태가바 웹앱 배경색 배경에 흰색 텍스트로 표시된다. |

## References

* Add a web app manifest <https://web.dev/add-manifest/>
* Changing The iOS Status Bar Of Your Progressive Web App <https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab>

## 그런데..

* 해놓고 보니 스플래쉬 스크린을 빼먹었다.
* 뭔가 흉내내기 하는 것 같고 답답합이 있어 내친김에 [iOS 네이티브앱(SwiftUI를 써서)으로 다시 만들어보았다](https://github.com/sehyunchung/bipi/tree/ios/Bipi!). 어째서 React Native를 쓰지 않은 것인지는 나도 모르겠지만.디제잉을 하다보면 종종 모르는 곡의 BPM을 알아내야 할 때가 생기는데(바이닐 쓰시는 분이랑 백투백을 한다던지), 여기저기 찾아봐도 맘에 들게 생긴게 없어서 BPM 태퍼를 만들어 써야겠다는 생각을 해왔고, 이번에 좀 시간이 나서 만들어보았다. 아무래도 오프라인 상황이 종종 있을 것 같고, 최근에 트위터라던가 이런저런 PWA를 설치해서 쓰는 데 좀 맛이 들려서(..) PWA로 만들어보기로. 회사에서 Vue 밖에 못써서 hooks도 써볼 겸 React로 만들어봤다.

그리하여 일단 완성된 앱은 이렇다:

> **웹앱** [`https://bipi.me`](https://bipi.me)\
> **깃헙** [`https://github.com/sehyunchung/bipi`](https://github.com/sehyunchung/bipi)

간단한 앱이다. 화면 아무곳을 3번 이상 탭하면 BPM을 계산해서 보여준다. 4초간 입력이 없으면 0으로 리셋.

## 해보고 싶었던 것들

PWA로 만들면서 중요하게 생각했던 것들은 아래와 같다.

* 당연하지만 **오프라인**에서 작동한다.
* 폰/패드/데스크탑에 설치하면 **앱 아이콘**이 표시된다.
* 앱아이콘을 터치해서 실행하면 브라우저로 이동하는 게 아니라 **스탠드얼론**으로 실행된다.
* 폰/패드에 설치할 경우 **상태바**가 검은색이나 흰색이 아니라 **앱 배경색에 맞게** 스타일링 된다.

다시 말해, 네이티브앱 경험에 최대한 가깝게 만들어보고 싶었다.

## 1. 오프라인에서 동작하게 만들기

서비스워커를 설정해주면 된다. 따로 한 건 없고 `create-react-app`에서 만들어주는 `index.tsx`의 맨 마지막 줄을 바꿔주기만 했다.

```diff
...
- serviceWorker.unregister()
+ serviceWorker.register()
...
```

## 2. 앱 아이콘 추가하기

여기서부턴 `manifest.json`에 설정을 추가하면 된다. `manifest.json`에서 앱아이콘을 설정하는 부분은 `"icons"` array다.

```diff
{
...
+    "icons": [{
+            "src": "favicon.ico",
+            "sizes": "64x64 32x32 24x24 16x16",
+            "type": "image/x-icon"
+        },
+        {
+            "src": "logo192.png",
+            "type": "image/png",
+            "sizes": "192x192"
+        },
+        {
+            "src": "logo512.png",
+            "type": "image/png",
+            "sizes": "512x512"
+        }
+    ],
...
}
```

## 3. 스탠드얼론 앱으로 실행되게 만들기

`manifest.json`에서 앱 바디가 어떻게 보이느냐를 설정하는 부분은 `"display"`다. 아래와 같이 `standalone`으로 설정했다.

```diff
{
...
+    "display": "standalone",
...
}
```

`display`의 설정값들과 설정시 화면 동작은 아래와 같았다.

| 프로퍼티         | 설정시 화면 동작                                                        |
| ------------ | ---------------------------------------------------------------- |
| `browser`    | 디폴트 브라우저 화면                                                      |
| `fullscreen` | 브라우저인데 ui가 안보이는 브라우저 화면 ..이라고 되어있는데 iOS에선 `browser`랑 차이가 없었다.    |
| `minimal-ui` | 스탠드얼론이랑 거의 같은데 메뉴바에 약간의 ui 컨트롤이 있음 ..이라고 되어있는데 iOS에선 역시 차이가 없었다. |
| `standalone` | 스탠드얼론 화면.                                                        |

> [android에선 되나봄..](https://superpwa.com/doc/web-app-manifest-display-modes/https://superpwa.com/doc/web-app-manifest-display-modes/)

## 4. 상태바 스타일링되게 하기

안드로이드/크롬에선 기본적으로 특별히 설정하지 않아도 그냥 되지만, iOS 기기는 따로 설정을 해주어야 한다. `index.html`의 `<head>` 영역에 아래코드를 추가한다.

```diff
+    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

역시 정리해 본 `apple-mobile-web-app-status-bar-style`의 설정값들과 설정시 화면 동작.

| 프로퍼티                | 설정시 화면 동작                     |
| ------------------- | ----------------------------- |
| `default`           | 상단에 상태바가 흰색 배경에 검은색 글자로 표시된다. |
| `black`             | 상단에 상태바가 검은색 배경에 흰색 글자로 표시된다. |
| `black-translucent` | 상태가바 웹앱 배경색 배경에 흰색 텍스트로 표시된다. |


## 그런데..

* 해놓고 보니 스플래쉬 스크린을 빼먹었다.
* 뭔가 흉내내기 하는 것 같고 답답합이 있어 내친김에 [iOS 네이티브앱(SwiftUI를 써서)으로 다시 만들어보았다](https://github.com/sehyunchung/bipi/tree/ios/Bipi!). 어째서 React Native를 쓰지 않은 것인지는 나도 모르겠지만.

## References

* Add a web app manifest <https://web.dev/add-manifest/>
* Changing The iOS Status Bar Of Your Progressive Web App <https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab>
