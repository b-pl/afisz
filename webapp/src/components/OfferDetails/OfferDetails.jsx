import React, { useState, useEffect } from 'react'
import host from '../../core/config'
import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import placeholder from '../../images/placeholder.png'
import Icon from '@material-ui/core/Icon'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

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
    maxWidth: 900,
    margin: 'auto'
  },
  description: {
    height: 150,
    marginTop: '1em',
    marginBottom: '1em'
  },
  personalInfo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5em'
  },
  personalInfoIcon: {
    marginRight: '0.5em'
  },
  breadCrumb: {
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '0.5em'
  }
})

function OfferDetails (props) {
  const [offer, setOffer] = useState({})
  const classes = useStyles()

  useEffect(() => {
    fetch(`${host}/offer/${props.offerID}`, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(data => {
        let tempOffer = {}
        for (const [key, value] of Object.entries(data[0])) {
          tempOffer = {
            ...tempOffer,
            [key]: value
          }
        }
        setOffer(tempOffer)
      })
  }, [])

  return (
    <div className={classes.body}>
      <Card>
        <Breadcrumbs aria-label='breadcrumb' className={classes.breadCrumb}>
          <Link color='inherit' href='/'>
            Homepage
          </Link>
          <Link color='inherit' href={`/offers?category=${offer.categoryID}&orderby=date&direction=desc`}>
            {offer.category}
          </Link>
          <Typography color="textPrimary">{offer.title}</Typography>
        </Breadcrumbs>
        <CardMedia
          className={classes.media}
          image={placeholder}
          title='placeholder'
        />
        <CardContent>
          <Typography variant='h5' color='primary'>
            {offer.title}
          </Typography>
          <Typography variant='h6' color='secondary'>
            ${offer.price}
          </Typography>
          <Typography variant='body1' color='textPrimary' className={classes.description}>
            {offer.description}
          </Typography>
          <Typography className={classes.personalInfo}>
            <Icon className={classes.personalInfoIcon}>account_circle</Icon>{offer.name}
          </Typography>
          <Typography className={classes.personalInfo}>
            <Icon className={classes.personalInfoIcon}>email</Icon>{offer.email}
          </Typography>
          <Typography className={classes.personalInfo}>
            <Icon className={classes.personalInfoIcon}>phone</Icon>{offer.phone}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default OfferDetails
