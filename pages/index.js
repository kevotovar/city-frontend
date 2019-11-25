import React from 'react'
import NextLink from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import gql from 'graphql-tag'
import get from 'lodash/get'

import PropertyCard from '../components/properties/PropertyCard'
import { withApollo } from '../lib/apollo'

const GET_PROPERTIES = gql`
  {
    properties(perPage: 12) {
      items {
        id
        zone
        mediumPictureUrl
        description
      }
      count
      pageInfo {
        hasNextPage
      }
    }
  }
`

export const config = { amp: 'hybrid' }

const useStyles = makeStyles(theme => ({
  cardGridContainer: {
    marginTop: theme.spacing(2),
  },
}))

function index() {
  const { loading, data } = useQuery(GET_PROPERTIES)
  const classes = useStyles()

  if (loading) {
    return <CircularProgress />
  }
  const hasMoreProperties = get(data, 'properties.pageInfo.hasNextPage', false)
  const properties = get(data, 'properties.items', [])
  return (
    <div>
      <Container>
        <Grid
          container
          alignItems="stretch"
          spacing={4}
          className={classes.cardGridContainer}
        >
          {properties.map(({ id, zone, mediumPictureUrl, description }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <PropertyCard
                id={id}
                title={zone}
                image={mediumPictureUrl}
                description={description}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container>
          {hasMoreProperties && (
            <Grid item xs={12}>
              <NextLink href="/properties/2">
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  href="/properties/2"
                >
                  Ver más
                </Button>
              </NextLink>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default withApollo(index)
