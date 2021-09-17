import { Link } from 'gatsby'

import Bio from './bio'
import { styled } from '../stitches.config'
import { ComponentProps } from 'react'

const HeaderBase = styled('header', {
  padding: '1.2em 1.4em 1em',
  backgroundColor: 'var(--color-bg)',
  position: 'sticky',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  gap: 'calc(8 * var(--px))',
  zIndex: '99',
  height: 'calc(30 * var(--px))',
  justifyContent: 'space-between',
  boxShadow: '0 -10px 20px 0 rgba(67, 81, 176, 0.4)',

  h1: {
    display: 'inline-flex',
    color: 'var(--color-quote-bg)',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    padding: '0',

    a: {
      display: 'inline-flex',
    },
  },
})

export default function Header(props: ComponentProps<typeof HeaderBase>) {
  return (
    <HeaderBase {...props}>
      <h1>
        <Link to={`/`}>
          <span aria-describedby="Thinking Face Emoji">{'🤔'}</span>
        </Link>
      </h1>
      <Bio />
    </HeaderBase>
  )
}
