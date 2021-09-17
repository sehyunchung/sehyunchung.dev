import type { ReactChild, ReactElement } from 'react'

import { styled } from '../stitches.config'

const FooterBase = styled('footer', {
  gridColumn: 2,
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0',
})

export default function Footer({
  children,
}: {
  children?: ReactChild
}): ReactElement {
  return (
    <FooterBase>
      <p>©{new Date().getFullYear()} Sehyun Chung</p>
      {children && <p>{children}</p>}
    </FooterBase>
  )
}
