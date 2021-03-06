/** @jsx jsx */

import React from 'react'
import { graphql, Link } from 'gatsby'
import { css, jsx } from '@emotion/react'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Utterances from '../components/Utterances'

function BlogPostTemplate(props) {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <p
        css={css`
          display: block;
          color: var(--text-secondary-color);
        `}
      >
        {post.frontmatter.date}
      </p>
      <h1>{post.frontmatter.title}</h1>
      <div
        css={css`
          h2,
          h3,
          h4 {
            a.anchor {
              fill: var(--color-code-txt);
              position: absolute;
              left: -20px;
              opacity: 0;
              transition: opacity 300ms;
            }
            &:hover {
              a.anchor {
                opacity: 1;
              }
            }
          }
        `}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      {post.frontmatter.tags && (
        <ul
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            border: none;
            list-style-type: none;
            margin: 0;
            padding: 4px 0;
            background-color: inherit;
          `}
        >
          {post.frontmatter.tags.map((tag) => (
            <li
              key={tag}
              css={css`
                font-family: var(--font-code);
              `}
            >
              <Link to={`/tags/${kebabCase(tag)}`}>#{tag}</Link>
            </li>
          ))}
        </ul>
      )}
      <hr
        css={css`
          margin-bottom: 20px;
        `}
      />
      <Utterances />

      <ul
        css={css`
          border: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          padding: 0;
          background-color: inherit;
        `}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MM-DD-YYYY")
        description
        tags
      }
    }
  }
`
