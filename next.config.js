const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withOffline = require('next-offline')

exports.default = withPlugins([[optimizedImages, {}], withOffline], {
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
})
