/** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import { css, jsx } from '@emotion/core'
import kebabCase from 'lodash/kebabCase'
import Utterances from '../components/utterances'

import Layout from '../components/layout'
import SEO from '../components/seo'

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          display: block;
          margin: 20px 0;
        `}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {post.frontmatter.tags && (
        <ul
          css={css`
            list-style-type: none;
            margin: 0;
            padding: 10px 0;
            display: flex;
          `}
        >
          {post.frontmatter.tags.map((tag) => (
            <li
              key={tag}
              css={css`
                padding-right: 6px;
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
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style: none;
          padding: 0;
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "LLLL", locale: "ko-kr")
        description
        tags
      }
    }
  }
`
