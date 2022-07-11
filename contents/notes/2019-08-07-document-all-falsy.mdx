---
title: document.all은 falsy
date: 2019-02-03T14:46:27.256Z
description: document.all이 어째서 falsy인가 하는 점에 대한 뻘글
tags:
  - javascript
---
`document.all`은 `HTMLAllCollection`(페이지의 모든 html요소가 들어있는 유사 배열)을 반환하는 속성이다. 콘솔에 쳐보면?

```bash
> document.all
> HTMLAllCollection(1588) [html.html__responsive, script, script, script, script, script, script, script, script#zm-extension, head, title, link, link, link, meta, meta, meta, meta, meta, meta, meta, meta, meta, script, script, link, link, link, meta, meta, meta, meta, meta, meta, meta, meta, meta, meta, script, script, noscript#noscript-css, script, script, script, script, script, link, script, link, script, script, link, link, body.question-page.unified-theme, div#notify-container, div#custom-header, header.top-bar.js-top-bar.top-bar__network._fixed, div.-container, div.-main, a.left-sidebar-toggle.p0.ai-center.jc-center.js-left-sidebar-toggle, span.ps-relative, a.-logo.js-gps-track, span.-img._glyph, form#search.searchbar.js-searchbar., div.ps-relative, input.s-input.js-search-field., button.s-btn.s-btn__primary.s-btn__icon.btn-topbar-primary.js-search-submit, svg, path, ol.-secondary.js-secondary-topbar-links.drop-icons-responsively.the-js-is-handling-responsiveness, li.-item.searchbar-trigger.js-searchbar-trigger, a.-link, svg, path, li.-item, a.-link.js-inbox-button, svg, path, span.indicator-badge.js-unread-count._important, li.-item, a.-link.js-achievements-button, svg, path, span.indicator-badge.js-unread-count._positive, li.-item.help-button-item, a.-link.js-help-button, svg, path, li.-item.site-switcher-item, a.-link.js-site-switcher-button.js-gps-track, svg, path, li.-ctas, a.login-link.s-btn.btn-topbar-clear.py8, a.login-link.s-btn.s-btn__primary.py8.btn-topbar-primary, li.-dialog-container.js-topbar-dialog-corral, div.topbar-dialog.siteSwitcher-dialog.dno, div.header, h3, a, …]
```

페이지 내의 모든 요소가 딸려나온다.

그런데, 콘솔에 `!!document.all`을 쳐보면,

```bash
> !!document.all
> false
```

`false`가 튀어나온다! 대체 어째서일까?

검색해보니 [이런 사연](https://stackoverflow.com/a/10394873/8994411) 을 찾을 수 있었다. 그러니까 `document.all`은 아래와 같이 구버전 브라우저 검사에 사용되어왔고,

```js
if (document.all) {
  // 낡은 브라우저에서 실행
} else if (document.getElementById) {
  // “모던” 브라우저에서 실행
}
```

대부분의 브라우저들이 하위호환 이슈 때문에 어쩔 수 없이 `document.all`을 지원하고 있는 관계로 `document.all`이 `true`가 되면 `else if` 블록의 코드가 실행되지 않는다는 이슈가 있었고, 고로 `false`로 해둘 수 밖에 없었다는 슬픈 이야기.

물론,

```js
if (document.getElementById) {
  // “모던” 브라우저에서 실행
} else if (document.all) {
  // 낡은 브라우저에서 실행
}
```

이렇게 하면 해결될 문제이지만 그냥 위의 코드를 쓰고 있는 경우가 많아 역시 `false`로 해둘 수 밖에 없었다고.

😩
