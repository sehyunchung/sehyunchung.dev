/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { social } = data.site.siteMetadata
        return (
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              margin-bottom: 20px;
            `}
          >
            <p
              css={css`
                margin-top: 20px;
              `}
            >
              <span>about</span>
              {'  |  '}
              <a href={`https://github.com/${social.github}`}>github</a>
            </p>
          </div>
        )
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
