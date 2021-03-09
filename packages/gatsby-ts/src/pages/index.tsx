/** @jsx jsx */
import { FC } from 'react'
import { css, jsx } from '@emotion/react'

import Layout from '../components/layout'

export const IndexPage: FC = () => {
  return <Layout noFooter></Layout>
}

IndexPage.displayName = 'IndexPage'

export default IndexPage
