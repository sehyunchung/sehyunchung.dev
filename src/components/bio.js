/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              justifyContent: 'flex-end',
              marginBottom: rhythm(1),
            }}
          >
            <p
              style={{
                marginTop: rhythm(0),
              }}
            >
              <span alt="about">about</span>
              {'  |  '}
              <a alt="github" href={`https://github.com/${social.github}`}>
                github
              </a>
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
