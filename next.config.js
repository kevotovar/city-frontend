const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')

exports.default = withOffline(
  withPlugins([[optimizedImages, {}]], {
    env: {
      GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    },
  })
)
