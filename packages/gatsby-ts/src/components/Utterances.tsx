import { useEffect, useRef } from 'react'
import { css } from '../stitches.config'

export default function Utterances() {
  const utterancesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
      utterancesRef?.current?.append(utterances)
    }
  }, [])

  return (
    <div
      className={css({
        maxWidth: '100%',
        padding: '0 0 calc(20 * var(--px))',
      })()}
      ref={utterancesRef}
    />
  )
}
