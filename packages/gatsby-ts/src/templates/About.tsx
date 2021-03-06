/** @jsx jsx */
import { jsx } from '@emotion/react'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function About({ pageContext }) {
  return (
    <Layout title="🚧">
      <h1>About</h1>
      <MDXRenderer>{pageContext.body}</MDXRenderer>
    </Layout>
  )
}
