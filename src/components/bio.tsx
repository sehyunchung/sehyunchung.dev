/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import { make as BioRe } from './Bio.bs'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { social } = data.site.siteMetadata
        return <BioRe social={social} />
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`

export default Bio
