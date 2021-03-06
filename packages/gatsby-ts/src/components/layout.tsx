/** @jsx jsx */
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import Footer from './Footer'
import Header from './Header'
import { TrailUp } from '../animations'

const Layout: FC<{ title?: string; location?: string }> = ({
  title,
  children,
}) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr min(65ch, 100%) 1fr;
        justify-content: stretch;
      `}
    >
      <Header
        css={css`
          grid-column: 1/4;
        `}
        title={title}
      />
      <main
        css={css`
          grid-column: 2;
          padding: 2rem;
        `}
      >
        <TrailUp>{children}</TrailUp>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
