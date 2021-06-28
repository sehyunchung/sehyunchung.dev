/** @jsx jsx */
import { graphql, Link } from 'gatsby'
import { css, jsx } from '@emotion/react'
import { snakeCase, kebabCase } from 'lodash'
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
          padding-top: 1em;
        `}
      >
        {post.frontmatter.date}
      </p>
      <h1
        css={css`
          line-height: 1.5;
          padding: 0.5em 0;
        `}
      >
        {post.frontmatter.title}
      </h1>
      <div
        css={css`
          h1,
          h2,
          h3,
          h4 {
            padding: 0.8em 0 0.2em;

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

          a {
            text-decoration: underline;
            word-wrap: break-word;
          }

          li {
            a {
              word-break: break-all;
            }
          }

          p {
            padding: 1em 0 0.5em;
          }

          ol,
          ul {
            padding: 1em 0;
            padding-inline-start: 2em;

            li {
              padding: 0.5em 0;
            }
          }

          table {
            border-collapse: collapse;
            margin: 1em 0;

            thead {
              background-color: rgba(var(--cool-blue-rgb), 0.1);
              color: var(--color-txt);
              border-top: var(--px) solid var(--color-txt);
            }

            tr {
              border-bottom: var(--px) solid var(--color-txt);
            }

            tr,
            th,
            td {
              border-color: var(--color-txt);
            }

            th,
            td {
              padding: 0.5em 1em;
            }
          }

          blockquote {
            background-color: var(--color-code-bg);
            padding: 0.5em 2em 1em;
          }

          code:not(.grvsc-code) {
            background-color: var(--color-code-bg);
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
            border: none;
            list-style-type: none;
            padding: 1em 0;
            background-color: inherit;
          `}
        >
          {post.frontmatter.tags.map((tag) => (
            <li
              key={tag}
              css={css`
                font-family: var(--font-text);
                padding-right: 1em;
              `}
            >
              <Link to={`/tags/${kebabCase(tag)}`}>#{snakeCase(tag)}</Link>
            </li>
          ))}
        </ul>
      )}
      <hr
        css={css`
          border-width: 0 0 calc(1 * var(--px)) 0;
          border-bottom-color: var(--color-txt);
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

          li {
            min-height: 3em;

            &:last-of-type {
              text-align: right;
            }
          }
        `}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li
          css={css`
            margin-left: auto;
          `}
        >
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
