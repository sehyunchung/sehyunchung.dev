import { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import snakeCase from 'lodash/snakeCase'
import Masonry from 'react-masonry-css'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { css } from '../stitches.config'

const TilIndex: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      githubData {
        data {
          repository {
            issues {
              nodes {
                updatedAt(formatString: "MM-DD-yyyy")
                id
                url
                title
                bodyHTML
                labels {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const issues = data.githubData.data.repository.issues.nodes.map((issue) => ({
    ...issue,
    labels: issue.labels.nodes.map((node) => node.name),
  }))

  return (
    <Layout full>
      <SEO title="til[wip]" />
      <h1
        className={css({
          paddingTop: '0.5rem',
        })()}
      >
        til[wip]
      </h1>
      <ul
        className={css({
          paddingInlineStart: '0',
          listStyleType: 'none',
          textAlign: 'center',
          fontSize: 'calc(var(--px) * 10)',

          '.til-masonry-grid': {
            display: 'flex',
            marginLeft: '-2em',
            width: 'auto',
          },

          '.til-masonry-grid-column': {
            paddingLeft: '2em /* gutter size */',
            backgroundClip: 'padding-box',
          },
        })()}
      >
        <Masonry
          breakpointCols={{
            default: 6,
            1920: 5,
            1280: 4,
            1024: 3,
            854: 2,
            640: 1,
          }}
          className="til-masonry-grid"
          columnClassName="til-masonry-grid-column"
        >
          {issues.map((issue) => (
            <li
              className={css({
                flex: '50ch',
                display: 'flex',
                flexDirection: 'column',
                padding: '1em 1em 2em',
                borderRadius: '1em',
                transition: 'all 200ms',
                backgroundColor: 'var(--color-bg)',
                border: 'calc(var(--px) * 12) solid',
                borderColor: 'var(--colors-gray7)',
                marginBottom: '2em',

                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 0 1em rgba(var(--cool-blue-rgb), 0.3)',
                },
              })()}
              key={issue.id}
            >
              <h2
                className={css({
                  fontSize: 'calc(var(--px) * 12)',
                  padding: '0',
                  wordBreak: 'break-all',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  lineHeight: '1.5',
                })()}
              >
                <a href={issue.url}>{issue.title}</a>
              </h2>
              <ul
                className={css({
                  listStyleType: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  paddingInlineStart: '0',
                  fontSize: 'calc(var(--px))',

                  'li:not(:last-of-type)': {
                    paddingRight: '1em',
                  },
                })()}
              >
                {issue.labels.map((label) => (
                  <li key={label}>#{snakeCase(label)}</li>
                ))}
              </ul>
              <span
                className={css({
                  fontSize: '0.8rem',
                  lineHeight: '3',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                })()}
              >
                {issue.updatedAt}
              </span>
              <div
                className={css({
                  maxWidth: '100%',
                  overflowX: 'auto',
                  overflowWrap: 'anywhere',
                  textAlign: 'left',
                  wordWrap: 'break-word',
                  wordBreak: 'break-all',
                  whiteSpace: 'pre-wrap',

                  '& *': {
                    wordWrap: 'break-word',
                    wordBreak: 'break-all',
                    overflowWrap: 'anywhere',
                    lineBreak: 'anywhere',
                    whiteSpace: 'pre-wrap',
                  },

                  a: {
                    textDecoration: 'underline',
                  },

                  code: {
                    backgroundColor: 'var(--color-code-bg)',
                  },

                  pre: {
                    padding: '0.4em 1em',
                    backgroundColor: 'var(--color-code-bg)',
                  },
                })()}
                dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}
              />
            </li>
          ))}
        </Masonry>
      </ul>
    </Layout>
  )
}

export default TilIndex
