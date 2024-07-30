const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "content/blogs" }, extension: { eq: "yaml" } }) {
        edges {
          node {
            childBlogsYaml {
              title
              date
              content
            }
          }
        }
      }
    }
  `)

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `/blogs/${node.childBlogsYaml.title.toLowerCase().replace(/ /g, '-')}`,
      component: path.resolve('./src/templates/blogTemplate.js'),
      context: {
        title: node.childBlogsYaml.title,
        date: node.childBlogsYaml.date,
        content: node.childBlogsYaml.content,
      },
    })
  })
}
