const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.createPages = ({ graphql, actions: { createPage } }) =>
  new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

    resolve(
      graphql(
        `
          {
            stories: allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  field_component
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }
        if (process.env.ENV !== 'production') {
          createPage({
            path: '/editor',
            component: path.resolve('src/pages/editor.js')
          })
        }
        const entries = result.data.stories.edges

        entries.forEach(entry => {
          const pagePath = entry.node.full_slug === 'home' ? '' : `${entry.node.full_slug}/`
          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node
            }
          })
        })
      })
    )
  })
