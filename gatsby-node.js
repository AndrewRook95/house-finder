const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/pages/house.js`)
    resolve(
      graphql(`
        query {
          allContentfulHouse {
            edges {
              node {
                id
                title
                image {
                  file {
                    url
                  }
                }
                price
                businessType
                description {
                    content {
                      content {
                        value
                        nodeType
                      }
                    }
                  }
                }
            }
          }
        }`)
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          console.log(result)
          result.data.allContentfulHouse.edges.forEach(edge => {
            createPage({
              path: `/house/${edge.node.id}`, // required
              component: blogPostTemplate,
              context: {
                image: edge.node.image.file.url,
                title: edge.node.title,
                price: edge.node.price,
                businessType: edge.node.businessType,
                description: edge.node.description,
              },
            })
          })
          return
        }),
    )
  })
}