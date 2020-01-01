import React, { useEffect, useRef } from 'react'
import { rhythm } from '../utils/typography'

function Utterances() {
  const utterancesRef = useRef(null)

  useEffect(() => {
    const utterances: HTMLElement = document.createElement('script')
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'sehyunchung/sehyunchung.github.io',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })

    utterancesRef.current.appendChild(utterances)
  }, [])

  return (
    <div
      className="utterances"
      ref={utterancesRef}
      style={{
        marginTop: rhythm(-3 / 4),
        marginBottom: rhythm(1 / 4),
      }}
    />
  )
}

export default Utterances
