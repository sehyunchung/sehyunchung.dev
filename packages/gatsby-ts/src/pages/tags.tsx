import { kebabCase, snakeCase } from 'lodash'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { css } from '../stitches.config'

const TagsPage = ({
  location,
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location={location} title={title}>
    <div>
      <SEO title="All Tags" />
      <div>
        <h1>All Tags</h1>
        <ul
          className={css({
            maxWidth: '100%',
            paddingInlineStart: '0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            listStyleType: 'none',
            border: 'none',
            fontFamily: 'var(--font-code)',

            li: {
              padding: '0.5em',
            },

            'li::before': {
              content: '""',
            },
          })()}
        >
          {group.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                #{snakeCase(tag.fieldValue)}{' '}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
