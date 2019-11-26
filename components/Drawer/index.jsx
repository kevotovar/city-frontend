import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export default function TemporaryDrawer({ open, toggleDrawer }) {
  const classes = useStyles()

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          <NextLink href="/">
            <ListItem button href="/" data-testid="home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
          </NextLink>
        </List>
      </div>
    </Drawer>
  )
}

TemporaryDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}
