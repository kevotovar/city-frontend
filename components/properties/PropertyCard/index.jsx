import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
  media: {
    height: 140,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
})

export default function MediaCard({ image, title, description, id }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <NextLink href={`/property/${id}`}>
          <Button size="small" color="primary" href={`/property/${id}`}>
            Ver más
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  )
}

MediaCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
