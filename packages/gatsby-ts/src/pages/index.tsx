/** @jsx jsx */

import React from 'react'
import { graphql, Link } from 'gatsby'
import { navigate } from '@reach/router'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { css, jsx } from '@emotion/react'

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

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
              border: 1px solid var(--color-background);
              cursor: pointer;
              transition: 0.2s;

              small,
              p {
                color: var(--color-txt);
              }

              &:hover,
              :active,
              :focus {
                padding-left: 1.4rem;
                background-color: var(--color-quote-bg);
                color: var(--color-txt);
                border: 1px solid var(--color-quote-border);
                box-shadow: 0.5rem 0.5rem 0 0 var(--color-quote-border);
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
                color: var(--color-txt-secondary);
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
                color: var(--color-txt-secondary);
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/blog/**" } }
    ) {
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
