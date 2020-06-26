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

  const handleClick = (slug) => navigate(slug)

  const handleKeyPress = (e, slug) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    navigate(slug)
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" keywords={[`blog`, `javascript`, `frontend`]} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div
            key={title}
            css={css`
              margin-top: 2rem;
              padding-top: 1.2rem;
              border: 1px solid var(--background-color);
              cursor: pointer;
              transition: 0.2s;

              small,
              p {
                color: var(--text-color);
              }

              &:hover,
              :active,
              :focus {
                padding-left: 1.4rem;
                background-color: var(--quote-bg-color);
                color: var(--text-color);
                border: 1px solid var(--quote-border-color);
                box-shadow: 0.8rem 0.8rem 0 0 var(--quote-border-color);
                outline: none;
              }
            `}
            role="button"
            tabIndex={0}
            onClick={() => handleClick(node.fields.slug)}
            onKeyPress={(e) => handleKeyPress(e, node.fields.slug)}
          >
            <small
              css={css`
                margin: 0;
                padding: 2px 0;
                color: var(--text-secondary-color);
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
              <span>{title}</span>
            </h2>
            <p
              css={css`
                position: relative;
                margin: 0;
                padding: 4px 0 28px;
                color: var(--text-secondary-color);
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
