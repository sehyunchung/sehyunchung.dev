/** @jsx jsx */
import { graphql, Link } from 'gatsby'
import { css, jsx } from '@emotion/react'
import snakeCase from 'lodash/snakeCase'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Tags = ({ pageContext, location, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`#${snakeCase(tag)}`} />
      <h1
        css={css`
          color: var(--link-color);
          font-weight: normal;
          word-wrap: break-word;
          word-break: break-all;
        `}
      >
        {` #${snakeCase(tag)}`}
      </h1>
      <ul
        css={css`
          border: none;
          padding-top: 1em;
          padding-bottom: 2em;
        `}
      >
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={`/blog${slug}`}>{title}</Link>
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
  query($tag: String) {
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
