const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "content" }, extension: { eq: "yaml" } }) {
        edges {
          node {
            childDataYaml {
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
      path: `/blogs/${node.childDataYaml.title.toLowerCase().replace(/ /g, '-')}`,
      component: path.resolve('./src/templates/blogTemplate.js'),
      context: {
        title: node.childDataYaml.title,
        date: node.childDataYaml.date,
        content: node.childDataYaml.content,
      },
    })
  })
}
