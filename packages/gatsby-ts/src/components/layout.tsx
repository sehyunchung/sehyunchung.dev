import { FC } from 'react'

import Footer from './Footer'
import Header from './Header'

import { css } from '../stitches.config'

const Layout: FC<{ title?: string; location?: string; full?: boolean }> = ({
  title,
  children,
  full,
}) => {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr min(65ch, calc(100% - 3em)) 1fr',
        justifyItems: 'stretch',
        height: '100%',
      })()}
    >
      <Header
        css={{
          gridColumn: '1/4',
        }}
        title={title}
      />
      <main
        className={css({
          gridColumn: full ? '1/4' : '2',
          padding: full ? '1em' : 'calc(14 * var(--px)) 0',
        })()}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
