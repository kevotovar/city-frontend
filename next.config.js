const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

exports.default = withPlugins([[optimizedImages, {}]], {
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
})
