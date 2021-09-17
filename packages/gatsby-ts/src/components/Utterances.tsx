/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/react'

export default function Utterances() {
  const utterancesRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const utterances = document.createElement('script')

    const attrs = [
      ['src', 'https://utteranc.es/client.js'],
      ['repo', 'sehyunchung/sehyunchung.dev'],
      ['issue-term', 'pathname'],
      ['theme', 'github-light'],
      ['crossorigin', 'anonymous'],
      ['async', 'true'],
    ]
    attrs.forEach(([k, v]) => {
      utterances.setAttribute(k, v)
    })

    if (utterancesRef) {
      utterancesRef.current.append(utterances)
    }
  }, [])

  return (
    <div
      css={css`
        max-width: 100%;
        padding: 0 0 calc(20 * var(--px));
      `}
      ref={utterancesRef}
    />
  )
}
