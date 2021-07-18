/** @jsx jsx */
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import Footer from './Footer'
import Header from './Header'

const Layout: FC<{ title?: string; location?: string; full?: boolean }> = ({
  title,
  children,
  full,
}) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr min(65ch, calc(100% - 3em)) 1fr;
        justify-items: stretch;
        height: 100%;
      `}
    >
      <Header
        css={css`
          grid-column: 1/4;
        `}
        title={title}
      />
      <main
        css={{
          gridColumn: full ? '1/4' : '2',
          padding: full ? '1em' : 'calc(14 * var(--px)) 0',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
