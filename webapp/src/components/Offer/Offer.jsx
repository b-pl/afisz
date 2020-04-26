import React from 'react'
import './Offer.css'
import { A } from 'hookrouter'
import placeholder from '../../images/placeholder.png'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  body: {
    maxWidth: 1280,
    margin: 'auto'
  },
  root: {
    margin: 10
  },
  media: {
    height: 140,
    width: '25%'
  },
  row: {
    display: 'flex'
  },
  rowSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  grow: {
    flexGrow: 1
  }
})

function Offer (props) {
  const classes = useStyles()

  return (
    <div className={classes.body}>
      <Card className={classes.root}>
        <CardActionArea className={classes.row}>
          <CardMedia
            className={classes.media}
            image={placeholder}
            title='placeholder'
          />
          <CardContent className={classes.grow}>
            <Typography variant='h4' color='primary'>
              {props.title}
            </Typography>
            <Typography variant='h5' color='secondary'>
              ${props.price}
            </Typography>
            <Typography className={classes.rowSpaceBetween}>
              <span>{props.date}</span>
              <span>{props.category}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Offer
