/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import { kebabCase, snakeCase } from 'lodash'

// Components
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { css, jsx } from '@emotion/react'

import Layout from '../components/layout'

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
      <Helmet title={title} />
      <div>
        <h1>all tags</h1>
        <ul
          css={css`
            max-width: 100%;
            padding-inline-start: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            list-style-type: none;
            border: none;
            font-family: var(--font-code);

            li {
              padding: 0.5em;
            }

            li::before {
              content: '';
            }
          `}
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

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

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
