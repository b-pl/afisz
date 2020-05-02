import React, { useState, useEffect } from 'react'
import host from '../../core/config'

import 'typeface-roboto'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { A } from 'hookrouter'


// !! MODAL FUNCTIONS !! -- BEGIN
const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
  return {
    width: '300px',
    height: '200px',
    position: 'absolute',
    left: '50%',
    top: '25%',
    marginLeft: '-150px',
    marginTop: '-100px',
  }
}
// !! MODAL FUNCTIONS !! -- END

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1280,
    margin: 'auto',
    marginTop: '1em'
  },
  formElementsSpacing: {
    margin: theme.spacing(1)
  },
  adjustmentColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%'
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  formButton: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}))

function NewOffer () {
  const classes = useStyles()
  const [categoriesList, setCategoriesList] = useState()
  const [offerData, setOfferData] = useState({
    title: '',
    price: '',
    category: '',
    email: '',
    name: '',
    phone: '',
    description: '',
    categoryID: ''
  })

  // !! MODAL VARIABLES !! -- BEGIN
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Do you really wish to cancel?</h2>
      <p id="simple-modal-description">
       All data you have entered will be deleted and you will be redirected to Homepage.
       To keep changes click outside this box.
      </p>
      <A href={'/'}>
        <Button variant="text" color="secondary">
          Delete offer
      </Button>
      </A>
    </div>
  )
  // !! MODAL VARIABLES !! -- END

  useEffect(() => {
    fetch(`${host}/categories`, {
      accept: 'application/json',
    })
    .then(res => res.json())
    .then(res => setCategoriesList(res))
  }, [])

  const handleInputChange = (e) => {
    setOfferData({
      ...offerData,
      [e.target.id]: e.target.value
    })
  }

  const handleCategorySelect = (e) => {
    setOfferData({
      ...offerData,
      category: e.target.value,
      categoryID: categoriesList.findIndex((element) => element.category === e.target.value)+1
    })
  }

  const handleSubmit = (e) => {
    fetch(`${host}/offers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(offerData),
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        const id = JSON.stringify(res.id)
        window.location.href = `/offers/${id}`
      })
  }
 
  return (
    <div className={classes.body}>
      <Paper elevation={3} className={classes.flexCenter}>
        <form className={classes.adjustmentColumn}>
          <FormControl className={classes.formElementsSpacing}>
            <TextField
              id='title'
              label='Title'
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className={classes.formElementsSpacing}>
            <InputLabel htmlFor="category-native-simple">Category</InputLabel>
            <Select
              id='category'
              native
              value={offerData.category}
              label='Category'
              onChange={handleCategorySelect}
            >
              <option aria-label='Not selected' value='' />
              {categoriesList && categoriesList.map(cat => (
                  <option id={cat.id} value={cat.category}>{cat.category}</option>
                ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formElementsSpacing}>
            <TextField
              id='description'
              label="Description"
              multiline
              rows={5}
              placeholder='Describe your offer here...'
              variant="outlined"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className={classes.formElementsSpacing}>
            <TextField
              id='price'
              label='Price'
              type='number'
              InputLabelProps={{
                shrink: true
              }}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className={classes.formElementsSpacing}>
            <TextField
              id='name'
              label='Name'
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className={classes.formElementsSpacing}>
            <TextField
              id='phone'
              label='Phone'
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className={classes.formElementsSpacing}>
            <TextField
              id='email'
              label='E-mail'
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl className={classes.formButton}>
            <Button variant="text" color="secondary" onClick={handleOpen}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add offer
            </Button>
          </FormControl>
        </form>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export default NewOffer
