import * as React from 'react'
import { styled } from '../../stitches.config'

function Utterances() {
  const utterancesRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const utterances = document.createElement('script')

    const attrs = [
      ['src', 'https://utteranc.es/client.js'],
      ['repo', 'sehyunchung/sehyunchung.dev'],
      ['issue-term', 'pathname'],
      ['theme', 'photon-dark'],
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

  return <div ref={utterancesRef} />
}

export default styled(Utterances, {
  maxWidth: '100%',
  margin: '20px 0',
})
