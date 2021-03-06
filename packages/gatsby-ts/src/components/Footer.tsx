/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/react'

let currentYear = new Date().getFullYear()

export default function Footer({ children = null }) {
  return (
    <footer
      css={css`
        display: flex;
        justify-content: space-between;
        margin-top: 20;
        padding: 20px 0;
        color: var(--txt-secondary-color);
      `}
    >
      <p>{currentYear} Sehyun Chung</p>
      {children && <p>{children}</p>}
    </footer>
  )
}
