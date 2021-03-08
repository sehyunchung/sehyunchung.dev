/** @jsx jsx */
import { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css, jsx } from '@emotion/react'
import snakeCase from 'lodash/snakeCase'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
        css={css`
          padding-top: 0.5rem;
        `}
      >
        til[wip]
      </h1>
      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, min(50ch, calc(50% - 2em)));
          grid-template-rows: auto;
          grid-gap: 2em;
          padding-inline-start: 0;
          list-style-type: none;
          text-align: center;
          display: grid;
          row-gap: 2em;
          font-size: 0.5rem;
        `}
      >
        {issues.map((issue) => (
          <li
            css={css`
              display: flex;
              flex-direction: column;
            `}
            key={issue.id}
          >
            <h2
              css={css`
                font-size: 1rem;
                padding: 0;
                word-break: break-all;
                text-align: left;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                line-height: 1.5;
              `}
            >
              {issue.title}
            </h2>
            <ul
              css={css`
                list-style-type: none;
                display: flex;
                align-items: center;
                padding-inline-start: 0;
                font-size: 0.6rem;

                li:not(:last-of-type) {
                  padding-right: 1em;
                }
              `}
            >
              {issue.labels.map((label) => (
                <li key={label}>#{snakeCase(label)}</li>
              ))}
            </ul>
            <span
              css={css`
                font-size: 0.6rem;
                line-height: 3;
                display: flex;
                justify-content: flex-end;
                align-items: center;
              `}
            >
              {issue.updatedAt}
            </span>
            <div
              css={css`
                max-width: 100%;
                overflow-x: auto;
                overflow-wrap: anywhere;
                text-align: left;
                word-wrap: break-word;
                word-break: break-all;
                white-space: pre-wrap;
                & * {
                  word-wrap: break-word;
                  word-break: break-all;
                  overflow-wrap: anywhere;
                  line-break: anywhere;
                  white-space: pre-wrap;
                }
                a {
                  text-decoration: underline;
                }
                code,
                pre {
                  background-color: var(--color-code-bg);
                }
                pre {
                  padding: 0.4em 1em;
                }
              `}
              dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}
            />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TilIndex
