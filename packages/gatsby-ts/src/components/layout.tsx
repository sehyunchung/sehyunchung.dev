/** @jsx jsx */
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/react'

import Bio from './bio'
import Footer from './Footer'
import { TrailUp } from '../animations'

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
      {header}
      <main>
        <TrailUp>{children}</TrailUp>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
