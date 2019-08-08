---
title: Gatsby 블로그에 Netlify CMS 적용하기
date: 2019-08-08T09:25:22.424Z
description: 딱히 뭘 한 것은 없다..
---
매번 마크다운 파일을 작성하고 푸쉬하고 어쩌고 하는 게 좀 귀찮아서 Netlify CMS를 적용해보았다. 'Existing project'에 추가하는 건 왠지 복잡할 것 같아서 미루고 있었는데, 해보니 매우 간단했다. Netlify 무엇..

아무튼, 과정은 다음과 같았다.

1. 프로젝트에 `netlify-cms-app`과 `gatsby-plugin-netlify-cms`를 설치한다.

```sh
npm install --save netlify-cms-app gatsby-plugin-netlify-cms
```

1. `gatsby-config.js`의 플러그인 설정을 추가한다.

```js
module.exports = {
    plugins: [
      `gatsby-plugin-netlify-cms`
    ]
}
```

1. `/static` 폴더 안에 `admin/config.yml`을 추가한다. 

```yaml
backend:
    name: github # github id로 로그인하려고 github이라고 해두었음.
    repo: # [github id]/[repo주소]
    branch: # 사용중인 branch명
media_folder: static/img
public_folder: /img
collections:
    - name: 'blog'
      label: 'Blog'
      folder: 'content/blog'
      create: true
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}'
      editor:
        preview: false
      fields:
        - { label: 'Title', name: 'title', widget: 'string' }
        - { label: 'Publish Date', name: 'date', widget: 'datetime' }
        - { label: 'Description', name: 'description', widget: 'string' }
        - { label: 'Body', name: 'body', widget: 'markdown' }
```

```
::주의: 당연히 될 거라 생각하고 `config.yaml`로 했더니 안됐다.::
```

1. 커밋/푸시하면 Netlify가 원래 하던대로 알아서 빌드를 해주고 이후 `블로그주소/admin`에 접속하면 netlify cms 어드민 페이지가 뜬다.
2. 포스트를 작성해본다. 뭔가 view 코드들을 만져서 데이터 바인딩을 해줘야 될 거라고 생각했는데 그러지 않아도 걍 작동했다. 웬일..
3. 이후 `content/` 안에서 이전에 작성해두었던 포스트들의 폴더들을 제거하면 끝이다.

![Smiling Bob Ross](/img/bob-ross-9464216-1-402.jpg)

참쉽죠..
