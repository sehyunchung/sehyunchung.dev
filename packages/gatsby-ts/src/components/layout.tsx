/** @jsx jsx */

import { Link } from 'gatsby'

import { css, jsx, Global } from '@emotion/react'

import Bio from './bio'
import Footer from './Footer'
import { TrailUp } from '../animations'

const globalStyle = css`
  :root {
    --cool-blue: #4351b0;
    --color-txt: var(--cool-blue);
    --color-txt-secondary: var(--cool-blue);
    --color-bg: var(--oc-white);
    --color-quote-bg: var(--color-bg);
    --color-quote-txt: var(--color-txt);
    --color-quote-border: var(--color-txt);
    --color-quote-shadow: var(--color-txt);
    --color-code-border: var(--color-txt-secondary);
    --color-code-txt: var(--color-txt-secondary);
    --color-link: var(--color-txt);
    --color-link-bg: var(--color-bg);
  }

  body {
    max-width: 100vw;
    background-color: var(--color-bg);
    color: var(--color-txt);
    word-break: keep-all;
    font-family: 'Tex Gyre Heroes CN', sans-serif;
    font-weight: 400;
    line-height: 160%;
    overflow-x: hidden;
    -webkit-text-size-adjust: none;
  }

  hr {
    border-top: 0.6px solid var(--color-txt);
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
    color: var(--color-link);
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
      color: var(--color-code-txt);
    }
  }

  blockquote {
    color: var(--color-quote-txt);
    background-color: var(--color-quote-bg);
    margin: 3rem 2rem;
    padding: 0.8rem 2rem;
    border: 1px solid var(--color-quote-border);
    overflow-x: auto;
    box-shadow: 0.8rem 0.8rem 0 0 var(--color-quote-shadow);

    a {
      color: var(--color-txt);
    }

    code {
      color: var(--color-code-txt);
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
      fill: var(--color-txt);
      overflow: auto !important;
    }
  }

  pre.grvsc-container {
    border: 1px solid var(--color-code-border);
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
    <header
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        justify-items: stretch;
      `}
    >
      <h1
        css={css`
          flex: 2;
          color: var(--color-quote-bg);
          font-size: 4rem;
          font-weight: bold;
          font-family: sans-serif;
          margin: 2rem 0;
        `}
      >
        <Link
          css={css`
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
      <Bio
        css={css`
          flex: 1;
          font-size: 1.2rem;
          font-weight: normal;
          display: flex;
          justify-content: flex-end;
        `}
      />
    </header>
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
      {header}
      <main>
        <TrailUp>{children}</TrailUp>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
