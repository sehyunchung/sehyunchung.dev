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
          <div key={node.fields.slug} css={css``}>
            <small
              css={css`
                margin: 0;
                padding: 2px 0;
                color: hsla(0, 0%, 0%, 0.5);
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
              <Link
                css={css`
                  box-shadow: none;
                  text-decoration: none;
                  color: hsla(0, 0%, 0%, 0.8);
                `}
                to={node.fields.slug}
              >
                {title}
              </Link>
            </h2>
            <p
              css={css`
                position: relative;
                margin: 0;
                padding: 4px 0 28px 30px;
                color: hsla(0, 0%, 0%, 0.62);
                font-size: 17px;
                &::before {
                  position: absolute;
                  content: '📝';
                  left: 0;
                  top: 3px;
                }
              `}
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
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
            date(formatString: "ll", locale: "ko-kr")
            title
            description
          }
        }
      }
    }
  }
`
