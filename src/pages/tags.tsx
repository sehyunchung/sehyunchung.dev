/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { css, jsx } from '@emotion/react'

import Layout from '../components/layout'

const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location={location} title={title}>
    <div>
      <Helmet title={title} />
      <div>
        <h1
          css={css`
            margin-bottom: 20px;
          `}
        >
          all tags
        </h1>
        <ul
          css={css`
            margin: 0;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            list-style-type: none;
            border: none;

            li {
              padding: 4px 12px;
              margin: 0;
            }

            li::before {
              content: '';
            }
          `}
        >
          {group.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                #{tag.fieldValue}{' '}
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
    allMarkdownRemark: PropTypes.shape({
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
