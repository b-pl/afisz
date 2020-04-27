import React, { useState, useEffect } from 'react'

import Offer from '../Offer/Offer'
import host from '../../core/config'
import { A } from 'hookrouter'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import 'typeface-roboto'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  body: {
    maxWidth: 1280,
    margin: 'auto'
  },
  space: {
    margin: theme.spacing(1)
  }
}))

function OffersList () {
  const [categories] = useState(['Art & Antiques',
    'Books',
    'Cell Phones',
    'Computers',
    'Consumer Electronics',
    'Health & Beauty',
    'Home & Garden',
    'Jewelry',
    'Movies',
    'Music',
    'Pets',
    'Sporting Goods',
    'Toys',
    'Video Games & Consoles'])
  const [offers, setOffers] = useState([])
  const [filter, setFilter] = useState('0')
  const [sorting, setSorting] = useState('0')
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)

  // Fetch offers
  useEffect(() => {
    const url = `${host}/offers_list?category=0&orderby=date&direction=desc`

    fetch(url, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }, [])

  

  const sendRequest = () => {
    let order = 'date'
    let direction = 'desc'

    if (sorting >= 2) order = 'price'
    else order = 'date'

    if (sorting === '1' || sorting === '2') direction = 'asc'
    else direction = 'desc'

    const url = `${host}/offers_list?category=${filter}&orderby=${order}&direction=${direction}`

    fetch(url, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose2 = () => {
    setOpen2(false)
  }

  const handleOpen2 = () => {
    setOpen2(true)
  }

  const handleSelectCategory = (e) => {
    return setFilter(e.target.value)
  }

  const handleSelectOrder = (e) => {
    return setSorting(e.target.value)
  }

  return (
    <div className={classes.body}>
      <AppBar position='static' color='inherit'>
        <Toolbar className={classes.row}>
          <div>
            <A href='/new-offer' className={classes.noUnderline}><Button variant='contained' color='primary'>Add offer</Button></A>
            <A href='/' className={classes.noUnderline}><Button color='secondary'>Homepage</Button></A>
          </div>

          <div>
            <div className={classes.row}>
              <FormControl className={classes.space}>
              <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={filter}
                onChange={handleSelectCategory}
              >
                <MenuItem key='0' value='0'>
                  <em>All</em>
                </MenuItem>
                {categories && categories.map(cat => (
                  <MenuItem
                    key={categories.indexOf(cat) + 1}
                    label={cat}
                    value={categories.indexOf(cat) + 1}>{cat}</MenuItem>
                ))}
              </Select>
              </FormControl>
              
              <FormControl className={classes.space}>
              <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open2}
                onClose={handleClose2}
                onOpen={handleOpen2}
                value={sorting}
                onChange={handleSelectOrder}
              >
                <MenuItem value='0'>
                  <em>New first</em>
                </MenuItem>
                <MenuItem value='1'>
                  <em>Old first</em>
                </MenuItem>
                <MenuItem value='2'>
                  <em>Price ascending</em>
                </MenuItem>
                <MenuItem value='3'>
                  <em>Price descending</em>
                </MenuItem>
              </Select>
              </FormControl>
              <Button style={{height: '50%', margin: 'auto'}} variant='contained' color='primary' onClick={sendRequest}>Filter</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Show offers */}
      {offers && offers.map(offer => (
        <Offer
          key={offers.indexOf(offer)}
          title={offer.title}
          price={offer.price}
          category={offer.category}
          date={offer.date}
          offerID={offer.id} />
      ))}
    </div>
  )
}

export default OffersList
