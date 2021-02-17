import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { social } = data.site.siteMetadata

        return (
          <>
            <Link to="/about">about</Link>
            {'  |  '}
            <a href={`https://github.com/"${social.github}`}>github</a>
          </>
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
