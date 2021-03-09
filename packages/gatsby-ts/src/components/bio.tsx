/** @jsx jsx */

import { FC, HtmlHTMLAttributes } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { css, jsx } from '@emotion/react'

export const Bio: FC<HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const data = useStaticQuery(graphql`
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
  `)

  const { social } = data.site.siteMetadata

  return (
    <nav
      css={css`
        display: inline-flex;
        a {
          padding-left: 1em;
        }
      `}
      {...props}
    >
      <Link to="/whoami">whoami</Link>
      <Link to="/blog">posts</Link>
      <Link to="/til">til</Link>
      <a href={`https://github.com/${social.github}`}>github</a>
    </nav>
  )
}

export default Bio
