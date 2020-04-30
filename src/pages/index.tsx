/** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { css, jsx } from '@emotion/core'

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" keywords={[`blog`, `javascript`, `frontend`]} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link
            css={css`
              color: var(--text-color);
              box-shadow: none;
              text-decoration: none;
            `}
            to={node.fields.slug}
          >
            <div key={node.fields.slug} css={css``}>
              <small
                css={css`
                  margin: 0;
                  padding: 2px 0;
                `}
              >
                {node.frontmatter.date}
              </small>
              <h2
                css={css`
                  margin: 0;
                  padding: 6px 0;
                `}
              >
                {title}
              </h2>
              <p
                css={css`
                  position: relative;
                  margin: 0;
                  padding: 4px 0 28px;
                `}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          </Link>
        )
      })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
