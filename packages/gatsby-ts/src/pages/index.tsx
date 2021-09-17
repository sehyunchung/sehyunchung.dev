import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { css } from '../stitches.config'

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" keywords={['blog', 'javascript', 'frontend']} />
      <ul
        className={css({
          display: 'grid',
          gridGap: '2em',
          listStyleType: 'none',
          paddingInlineStart: '0',

          li: {
            display: 'grid',
            gridTemplateColumns: '4fr max-content',
            gridTemplateRows: 'repeat(min-content, 2)',
            gridTemplateAreas: "'title date' 'desc desc'",
            columnGap: '1em',
            rowGap: '0.6em',
            alignItems: 'center',

            a: {
              gridArea: 'title',

              h2: {
                lineHeight: '1.3',
              },
            },

            span: {
              '&:nth-of-type(1)': {
                gridArea: 'date',
                placeSelf: 'center',
              },

              '&:nth-of-type(2)': {
                gridArea: 'desc',
              },
            },
          },
        })()}
      >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <li key={node.id}>
              <Link to={node.fields.slug}>
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
