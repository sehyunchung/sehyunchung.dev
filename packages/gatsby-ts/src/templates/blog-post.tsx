import { graphql, Link } from 'gatsby'
import { snakeCase, kebabCase, castArray } from 'lodash'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Utterances from '../components/Utterances'

import { css } from '../stitches.config'

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
      <h1
        className={css({
          lineHeight: '1.5',
          padding: '0.5em 0',
        })()}
      >
        {post.frontmatter.title}
      </h1>
      <p
        className={css({
          paddingBottom: '1em',
        })()}
      >
        {post.frontmatter.date}
      </p>
      <div
        className={css({
          'h1,h2,h3,h4': {
            padding: '0.8em 0 0.2em',

            'a.anchor': {
              fill: 'var(--color-code-txt)',
              position: 'absolute',
              left: '-20px',
              opacity: '0',
              transition: 'opacity 300ms',
            },

            '&:hover': {
              'a.anchor': {
                opacity: 1,
              },
            },
          },

          a: {
            textDecoration: 'underline',
            wordWrap: 'break-word',
          },

          li: {
            a: {
              wordBreak: 'break-all',
            },
          },

          p: {
            padding: '1em 0 0.5em',
          },

          'ol,ul': {
            padding: '1em 0',
            paddingInlineStart: '2em',

            li: {
              padding: '0.5em 0',
            },
          },

          table: {
            borderCollapse: 'collapse',
            margin: '1em 0',

            thead: {
              backgroundColor: 'rgba(var(--cool-blue-rgb), 0.1)',
              color: 'var(--color-txt)',
              borderTop: 'var(--px) solid var(--color-txt)',
            },

            tr: {
              borderBottom: 'var(--px) solid var(--color-txt)',
            },

            'tr,th,td': {
              borderColor: 'var(--color-txt)',
            },

            'th,td': {
              padding: '0.5em 1em',
            },
          },

          blockquote: {
            backgroundColor: 'var(--color-code-bg)',
            padding: '0.5em 2em 1em',
          },

          'code:not(.grvsc-code)': {
            backgroundColor: 'var(--color-code-bg)',
          },
        })()}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      {post.frontmatter.tags && (
        <ul
          className={css({
            display: 'flex',
            flexWrap: 'wrap',
            border: 'none',
            listStyleType: 'none',
            padding: '1em 0',
            backgroundColor: 'inherit',
          })()}
        >
          {post.frontmatter.tags.map((tag) => (
            <li
              key={tag}
              className={css({
                fontFamily: 'var(--font-code)',
                fontSize: '0.8rem',
                paddingRight: '1em',
              })()}
            >
              <Link to={`/tags/${kebabCase(tag)}`}>#{snakeCase(tag)}</Link>
            </li>
          ))}
        </ul>
      )}
      <hr
        className={css({
          borderWidth: '0 0 calc(1 * var(--px)) 0',
          borderBottomColor: 'var(--color-txt)',
        })()}
      />
      <Utterances />

      <ul
        className={css({
          border: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: '0',
          backgroundColor: 'inherit',

          li: {
            minHeight: '3em',

            '&:last-of-type': {
              textAlign: 'right',
            },
          },
        })()}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li
          className={css({
            marginLeft: 'auto',
          })()}
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
