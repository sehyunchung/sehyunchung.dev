/** @jsx jsx */

import React, { FC, HtmlHTMLAttributes } from 'react'
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
    <div
      css={css`
        display: inline-grid;
        grid-template-columns: auto auto;
        column-gap: 1em;
      `}
      {...props}
    >
      <Link to="/about">about</Link>
      <a href={`https://github.com/${social.github}`}>github</a>
    </div>
  )
}

export default Bio
