import * as React from 'react'
import { css } from '../../stitches.config'

let currentYear = new Date().getFullYear()

const footerCss = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 20,
  padding: '20px 0',
  color: 'var(--txt-secondary-color)',
})

export default function Footer({ children }) {
  return (
    <footer className={footerCss}>
      <p>{currentYear} Sehyun Chung</p>
      <p>{children}</p>
    </footer>
  )
}
