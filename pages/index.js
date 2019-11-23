import React from 'react'
import { withApollo } from '../lib/apollo'

function index() {
  return 'hello'
}

export default withApollo(index)
