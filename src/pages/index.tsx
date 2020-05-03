/** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import { navigate } from '@reach/router'

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
          <div
            css={css`
              margin-top: 2rem;
              padding: 1rem 1rem 0;
              border: 1px solid var(--background-color);
              cursor: pointer;
              transition: 0.2s;
              &:hover,
              &:active {
                background-color: var(--quote-bg-color);
                border: 1px solid var(--quote-border-color);
                box-shadow: 0.8rem 0.8rem 0px 0px var(--quote-border-color);
              }
            `}
            onClick={() => navigate(node.fields.slug)}
          >
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
              <span
                css={css`
                  position: relative;
                  &::after {
                    transition: 5s;
                    position: absolute;
                    bottom: -2px;
                    left: 2px;
                    content: '';
                    height: 1rem;
                    width: 100%;
                    background-color: var(--quote-border-color);
                    z-index: -1;
                    opacity: 0;
                  }
                  &:hover::after {
                    opacity: 1;
                  }
                `}
              >
                {title}
              </span>
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
