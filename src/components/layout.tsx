/** @jsx jsx */

import React from 'react'
import { Link } from 'gatsby'

import { css, jsx, Global } from '@emotion/core'

import Bio from './bio'

const globalStyle = css`
  body {
    overflow: hidden;
    background-color: hsl(0, 0%, 96%);
    word-break: keep-all;
    font-family: 'Gothic A1';
  }
  a {
    color: hsla(212, 97%, 43%, 1);
    text-decoration: none;
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
  }
  pre,
  code {
    font-family: Menlo, Monaco, Consolas, monospace;
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
          margin: 0 0 20px;
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
        height: 100%;
        margin: 20px auto 0;
        max-width: 1024px;
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
