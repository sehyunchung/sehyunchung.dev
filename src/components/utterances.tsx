/** @jsx jsx */

import React, { useEffect, useRef } from 'react'

import { css, jsx } from '@emotion/core'

function Utterances() {
  const utterancesRef = useRef(null)

  useEffect(() => {
    const utterances: HTMLElement = document.createElement('script')
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'sehyunchung/sehyunchung.github.io',
      'issue-term': 'pathname',
      theme:"photon-dark",
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
      css={css`
        max-width: 100vw !important;
        margin-top: 20px;
        margin-bottom: 20px;
      `}
    />
  )
}

export default Utterances
