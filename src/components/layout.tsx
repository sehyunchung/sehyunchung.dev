/** @jsx jsx */

import React from 'react'
import { Link } from 'gatsby'

import { css, jsx, Global } from '@emotion/core'

import Bio from './bio'

const globalStyle = css`
  body {
    background-color: #111111;
    color: #ccc;
    word-break: keep-all;
    font-family: 'Gothic A1';
    line-height: 160%;
  }
  pre::-webkit-scrollbar {
    display: none;
  }
  a {
    color: hsl(0, 0%, 80%);
    text-decoration: underline;
  }
  a:hover,
  a:active,
  a:visited {
    padding: 2px 6px;
    border-radius: 4px;
    margin: -6px;
  }
  p {
    margin-top: 20px;
    & > img {
      margin-left: 50%;
      transform: translateX(-50%);
    }
    code {
      font-size: 0.9rem;
    }
  }
  blockquote {
    margin-top: 3rem;
    padding: 0 30px;
    border: 1px solid #222;
    border-radius: 8px;
  }
  pre,
  code {
    font-family: Menlo, Monaco, Consolas, monospace;
  }
  .grvsc-container {
    font-size: 0.9rem;
    border: 0.5px solid #333;
    border-radius: none;
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
          font-size: 4em;
          font-weight: bold;
          margin: 2rem 0 4rem;
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
          `}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        css={css`
          font-size: 3rem;
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
          `}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
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
      <footer
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 20px;
        `}
      >
        © {new Date().getFullYear()} Sehyun Chung <Bio />
      </footer>
    </div>
  )
}

export default Layout
