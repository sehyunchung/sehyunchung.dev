/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/react'

let currentYear = new Date().getFullYear()

const Footer: React.FC<React.HtmlHTMLAttributes<HTMLElement>> = ({
  children = null,
}) => {
  return (
    <footer
      css={css`
        grid-column: 2;
        display: flex;
        justify-content: center;
        color: var(--txt-secondary-color);
        padding: 2rem 0;
      `}
    >
      <p>©{currentYear} Sehyun Chung</p>
      {children && <p>{children}</p>}
    </footer>
  )
}
export default Footer
