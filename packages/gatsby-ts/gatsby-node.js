const path = require('path')
const kebabCase = require('lodash/kebabCase')

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPost = path.resolve('./src/templates/blog-post.tsx')
  const TagTemplate = path.resolve('./src/templates/tags.tsx')
  const About = path.resolve('./src/templates/About.tsx')

  return graphql(
    `
      {
        postsMdx: allMdx(
          filter: { fileAbsolutePath: { glob: "**/content/blog/**/*" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.postsMdx.edges

    // Create tags pages.
    const tags = result.data.tagsGroup.group

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/blog${post.node.fields.slug}`,
        component: BlogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    tags.forEach((tag) => {
      createPage({
        path: `/tags/${kebabCase(tag.fieldValue)}/`,
        component: TagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
