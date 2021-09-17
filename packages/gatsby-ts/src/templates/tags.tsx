import { graphql, Link } from 'gatsby'
import snakeCase from 'lodash/snakeCase'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '../stitches.config'

const Tags = ({ pageContext, location, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`#${snakeCase(tag)}`} />
      <h1
        className={css({
          color: 'var(--link-color)',
          fontWeight: 'normal',
          wordWrap: 'break-word',
          wordBreak: 'break-all',
        })()}
      >
        {` #${snakeCase(tag)}`}
      </h1>
      <ul
        className={css({
          border: 'none',
          paddingTop: '1em',
          paddingBottom: '2em',
        })()}
      >
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
