import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/seo'

export default function About({ pageContext }) {
  return (
    <Layout title="🚧">
      <SEO title="About" />
      <h1>About</h1>
      <MDXRenderer>{pageContext.body}</MDXRenderer>
    </Layout>
  )
}
