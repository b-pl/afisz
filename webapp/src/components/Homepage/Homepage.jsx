import React, { useState, useEffect } from 'react'
import { A } from 'hookrouter'
import host from '../../core/config'

import placeholder from '../../images/placeholder.png'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: 10
  },
  media: {
    height: 140
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  noUnderline: {
    textDecoration: 'none'
  },
  body: {
    maxWidth: 1280,
    margin: 'auto'
  }
})

function Homepage (props) {
  const classes = useStyles()
  const [offers, setOffers] = useState([])

  // Fetch offers
  useEffect(() => {
    fetch(`${host}/newestOffers`, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }, [])

  return (
    <div className={classes.body}>
      <AppBar position='static' color='inherit'>
        <Toolbar>
          <A href='/new-offer' className={classes.noUnderline}><Button variant='contained' color='primary'>Add offer</Button></A>
          <A href='/offers' className={classes.noUnderline}><Button color='secondary'>All offers</Button></A>
        </Toolbar>
      </AppBar>

      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        {offers && offers.map(offer => (
          <A href={'/offers/' + offer.id} className={classes.noUnderline}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={placeholder}
                  title='placeholder'
                />
                <CardContent>
                  <div className={classes.row}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {offer.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      ${offer.price}
                    </Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {offer.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </A>
        ))}
      </Box>

    </div>
  )
}

export default Homepage
