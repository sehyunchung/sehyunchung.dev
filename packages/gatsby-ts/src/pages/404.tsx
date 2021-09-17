import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { styled } from '../stitches.config'

const NotFoundHeader = styled('h2', {
  fontSize: '6rem',
})

export default function NotFoundPage({ data }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <NotFoundHeader>{`🏜`}</NotFoundHeader>
      <p>여긴 아무것도 없답니다...</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
