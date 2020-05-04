/** @jsx jsx */

import React from 'react'
import { Link } from 'gatsby'

import { css, jsx, Global } from '@emotion/core'

import Bio from './bio'

const globalStyle = css`
  :root {
    --text-color: var(--oc-gray-2);
    --background-color: var(--oc-gray-8);
    --quote-bg-color: var(--oc-blue-7);
    --quote-txt-color: var(--oc-blue-1);
    --quote-border-color: var(--oc-blue-8);
    --quote-shadow-color: var(--oc-blue-8);
    --code-border-color: var(--oc-gray-7);
    --link-color: var(--oc-blue-6);
    --link-bg-color: var(--oc-blue-6);
  }
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    word-break: keep-all;
    font-family: 'Gothic A1', arial, sans-serif;
    font-weight: 400;
    line-height: 160%;
    overflow-x: hidden;
  }
  hr {
    border-top: 0.6px solid var(--text-color);
    border-bottom: none;
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
  }
  blockquote {
    color: var(--quote-txt-color);
    background-color: var(--quote-bg-color);
    margin: 3rem 2rem;
    padding: 0.8rem 2rem;
    border: 1px solid var(--quote-border-color);
    overflow-x: auto;
    box-shadow: 0.8rem 0.8rem 0px 0px var(--quote-shadow-color);
    a {
      color: var(--text-color);
    }
  }
  pre,
  code {
    font-family: Menlo, Monaco, Consolas, monospace;
  }
  iframe {
    margin: 0 auto;
  }
  li {
    padding: 0.4rem 0;
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
    border: 1px solid var(--quote-border-color);
    thead {
      background-color: #222;
    }
    thead,
    tbody,
    tr,
    th,
    td {
      padding: 8px 12px;
      border: 1px sold var(--code-border-color);
    }
    tr,
    th,
    td {
      border: 1px solid var(--code-border-color);
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
    font-size: 0.9rem;
  }
  .utterances {
    max-width: inherit;
  }
`

function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header: JSX.Element

  if (location.pathname === rootPath) {
    header = (
      <h1
        css={css`
          color: var(--quote-bg-color);
          font-size: 4rem;
          font-weight: bold;
          margin: 2rem 0 4rem;
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
            background: none;
            border: none;
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
  } else {
    header = (
      <h1
        css={css`
          color: var(--quote-bg-color);
          font-size: 3rem;
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
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
  }
  return (
    <div
      css={css`
        max-width: 640px;
        height: 100%;
        margin: 0 auto;
        padding: 10px;
        overflow-x: hidden;
      `}
    >
      <Global styles={globalStyle} />
      <header>{header}</header>
      <main>{children}</main>
      <footer
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 20px;
          padding: 20px 0;
        `}
      >
        <p>© {new Date().getFullYear()} Sehyun Chung</p>
        <Bio />
      </footer>
    </div>
  )
}

export default Layout
