import { graphql, Link, useStaticQuery } from 'gatsby'

import { styled } from '../stitches.config'

const Nav = styled('nav', {
  display: 'inline-flex',

  a: {
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
  },
})

export default function Bio() {
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
    <Nav>
      <Link to="/about">about</Link>
      <Link to="/til">til</Link>
      <a href={`https://github.com/${social.github}`}>github</a>
    </Nav>
  )
}
