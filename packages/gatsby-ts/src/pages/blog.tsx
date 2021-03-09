/** @jsx jsx */
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { css, jsx } from '@emotion/react'

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" keywords={['blog', 'javascript', 'frontend']} />
      <ul
        css={css`
          display: grid;
          grid-gap: 2em;
          list-style-type: none;
          padding-inline-start: 0;

          li {
            display: grid;
            grid-template-columns: 4fr max-content;
            grid-template-rows: repeat(min-content, 2);
            grid-template-areas: 'title date' 'desc desc';
            column-gap: 1em;
            align-items: center;

            a {
              grid-area: title;

              h2 {
                line-height: 1.3;
              }
            }

            span {
              &:nth-of-type(1) {
                grid-area: date;
                place-self: center;
              }
              &:nth-of-type(2) {
                grid-area: desc;
              }
            }
          }
        `}
      >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <li key={node.id}>
              <Link to={`/blog${node.fields.slug}`}>
                <h2>{title}</h2>
              </Link>
              <span>{node.frontmatter.date}</span>
              <span>{node.frontmatter.description}</span>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/blog/**" } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM-DD-YYYY")
            title
            description
          }
        }
      }
    }
  }
`
