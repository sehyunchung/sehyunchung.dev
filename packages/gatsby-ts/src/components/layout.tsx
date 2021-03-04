/** @jsx jsx */

import React from 'react'
import { Link } from 'gatsby'

import { css, jsx, Global } from '@emotion/react'

import Bio from './bio'
import Footer from './Footer'

const globalStyle = css`
  :root {
    --cool-blue: #4351b0;
    --text-color: var(--cool-blue);
    --text-secondary-color: var(--cool-blue);

    --background-color: var(--oc-white);

    --quote-bg-color: var(--oc-white);

    --quote-txt-color: var(--cool-blue);

    --quote-border-color: var(--cool-blue);

    --quote-shadow-color: var(--cool-blue);

    --code-border-color: var(--cool-blue);
    --code-txt-color: var(--cool-blue);

    --link-color: var(--cool-blue);
    --link-bg-color: var(--oc-blue-6);
  }

  body {
    max-width: 100vw;
    background-color: var(--background-color);
    color: var(--text-color);
    word-break: keep-all;
    font-family: 'Tex Gyre Heroes CN', sans-serif;
    font-weight: 400;
    line-height: 160%;
    overflow-x: hidden;
    -webkit-text-size-adjust: none;
  }

  hr {
    border-top: 0.6px solid var(--text-color);
    border-bottom: none;
  }

  pre,
  code {
    font-family: Monaco, Consolas, monospace;
    font-size: 14px;
  }

  ul,
  ol {
    overflow-x: auto;
    padding: 1rem 3rem;

    &::-webkit-scrollbar {
      display: none;
    }

    li:not(:last-child) {
      padding-bottom: 1rem;
    }
  }

  pre::-webkit-scrollbar {
    display: none;
  }

  a {
    color: var(--link-color);
    font-weight: bold;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }

    padding: 2px;
  }

  p {
    margin-top: 20px;

    & > img {
      display: inherit;
      max-width: 100%;
      margin: 0 auto;
    }

    code {
      color: var(--code-txt-color);
    }
  }

  blockquote {
    color: var(--quote-txt-color);
    background-color: var(--quote-bg-color);
    margin: 3rem 2rem;
    padding: 0.8rem 2rem;
    border: 1px solid var(--quote-border-color);
    overflow-x: auto;
    box-shadow: 0.8rem 0.8rem 0 0 var(--quote-shadow-color);

    a {
      color: var(--text-color);
    }

    code {
      color: var(--code-txt-color);
    }
  }

  iframe {
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 4rem;
    line-height: initial;

    pre,
    code {
      font-size: inherit;
    }
  }

  table {
    margin: 2rem 0;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--oc-gray-6);

    thead {
      background-color: var(--oc-gray-7);
    }

    thead,
    tbody,
    tr,
    th,
    td {
      padding: 8px 12px;
      border: 1px sold var(--oc-gray-6);
    }

    tr,
    th,
    td {
      border: 1px solid var(--oc-gray-7);
    }
  }

  .anchor.before {
    transform: translate(-100%, -10%);

    svg {
      fill: var(--text-color);
      overflow: auto !important;
    }
  }

  pre.grvsc-container {
    border: 1px solid var(--code-border-color);
    margin: 2rem 0;
    border-radius: 0 !important;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  pre.grvsc-container,
  code.grvsc-code {
    font-size: 14px !important;
  }

  .utterances {
    max-width: inherit;
  }
`

function Layout(props) {
  const { location, title, children } = props
  const header = (
    <h1
      css={css`
        color: var(--quote-bg-color);
        font-size: 4rem;
        font-weight: bold;
        font-family: sans-serif;
        margin: 2rem 0 4rem;
      `}
    >
      <Link
        css={css`
          /* box-shadow: 10px 10px var(--cool-blue); */
          text-decoration: none;
          color: inherit;
          background-color: none;
          border: 1px dashed var(--cool-blue);
          border-radius: 99%;
          padding: 0.3em 0.3em 0.2em;

          :hover {
            text-decoration: none !important;
          }
        `}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div
      css={css`
        max-width: 640px;
        height: 100%;
        margin: 0 auto;
        padding: 10px;
      `}
    >
      <Global styles={globalStyle} />
      <header>{header}</header>
      <main>{children}</main>
      <Footer>
        <Bio />
      </Footer>
    </div>
  )
}

export default Layout
