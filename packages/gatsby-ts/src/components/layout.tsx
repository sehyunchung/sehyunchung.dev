/** @jsx jsx */
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import Footer from './Footer'
import Header from './Header'
import SEO from './seo'
import { TrailUp } from '../animations'

const Layout: FC<{
  noHeader?: boolean
  noFooter?: boolean
  title?: string
  location?: string
  full?: boolean
}> = ({ noHeader = false, noFooter = false, title, children, full }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr min(65ch, calc(100% - 3em)) 1fr;
        justify-items: stretch;
        height: 100%;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          a.anchor {
            fill: var(--color-code-txt);
            position: absolute;
            left: -20px;
            opacity: 0;
            transition: opacity 300ms;
            width: 1em;
          }
          &:hover {
            a.anchor {
              opacity: 1;
            }
          }
        }
      `}
    >
      <SEO title={title} />
      {!noHeader && (
        <Header
          css={css`
            grid-column: 1/4;
          `}
        />
      )}
      <main
        css={{
          gridColumn: full ? '1/4' : '2',
          padding: full ? '1em' : 'calc(14 * var(--px)) 0',
        }}
      >
        <TrailUp>{children}</TrailUp>
      </main>
      {!noFooter && (
        <Footer
          css={css`
            grid-column: 1/4;
          `}
        />
      )}
    </div>
  )
}

export default Layout
