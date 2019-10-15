import React from 'react'
import './NewOffer.css'
import Modal from 'react-modal'
import { A } from 'hookrouter'
import host from '../../core/config'

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

const validateForm = (errors) => {
  let valid = true
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  )
  return valid
}

class NewOffer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: [],
      modalIsOpen: false,
      selectedCategory: 'Art',
      date: new Date().toLocaleString().slice(0,10),
      errors: {
        title: '',
        description: '',
        name: '',
        phone: '',
        email: ''
      }
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (e) {
    const target = e.target
    const value = target.value
    const name = target.name
    const errors = this.state.errors

    switch(name) {
      case 'title':
        errors.title = value.length <= 3 ? 'Title must be longer than 3 characters!' : ''
        break
      case 'description':
        errors.description = value.length <= 10 ? 'Description must containt at least one sentence' : ''
        break
      case 'name':
        errors.name = value.length < 3 ? 'Name must be at least 3 characters long' : ''
        break
      case 'phone':
        errors.phone = value.length < 9 ? 'Please write a valid number format' : ''
        break
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!'
        break
      default:
        break
    }

    this.setState({
      errors,
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    
    if(validateForm(this.state.errors)) {
      const data = {
        title: this.state.title,
        price: this.state.price,
        category: this.state.selectedCategory,
        date: this.state.date,
        email: this.state.email,
        name: this.state.name,
        phone: this.state.phone,
        description: this.state.description
      }

      fetch(`${host}/offers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => {
          return res.json()
        })
        .then(res => console.log('Success: ', res))
        .catch(error => console.error('Error', error))
    } else console.error('Invalid form')
  }

  openModal () {
    this.setState({ modalIsOpen: true })
  }

  closeModal () {
    this.setState({ modalIsOpen: false })
  }

  getDate () {
    const currentDate = new Date()
    let currentMonth = currentDate.getMonth() + 1
    let currentDay = currentDate.toString().slice(8, 10)
    if (currentMonth < 10) currentMonth = '0' + currentMonth
    const returnDate = currentDate.getFullYear() + '-' + currentMonth + '-' + currentDay
    return returnDate
  }

  componentDidMount() {
    fetch(`${host}/offers`, {
      accept: 'application/json',
    })
      .then(res => res.json())
      .then(category => {
        this.setState({
          category
        })
      })
  }

  render () {
    const {errors} = this.state
    return (
      <div className='new-offer' id='new-offer'>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='form__input-block'>
            <label className='form__label'>Category: </label>
            <select name='category' className='form__input' onChange={
              (e) => this.setState({ selectedCategory: e.target.value })
            }>
              {this.state.category && this.state.category.map(category => (
                <option value={category.category}>{category.category}</option>
              ))}
            </select>
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Title: </label>
            <input className='form__input' type='text' name='title' id='title' onChange={this.handleInputChange} />
            {errors.title.length > 0 && <span className='form__error'>{errors.title}</span>}
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Price: </label>
            <input className='form__input price' type='number' name='price' id='price' onChange={this.handleInputChange} />
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Description: </label>
            <textarea className='form__input description' name='description' id='description' onChange={this.handleInputChange} rows='10' />
            {errors.description.length > 0 && <span className='form__error'>{errors.description}</span>}
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Name: </label>
            <input className='form__input' type='text' name='name' id='name' onChange={this.handleInputChange} />
            {errors.name.length > 0 && <span className='form__error'>{errors.name}</span>}
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Phone no: </label>
            <input className='form__input' type='text' name='phone' id='phone' onChange={this.handleInputChange} />
            {errors.phone.length > 0 && <span className='form__error'>{errors.phone}</span>}
          </div>
          <div className='form__input-block'>
            <label className='form__label'>E-mail: </label>
            <input className='form__input' type='text' name='email' id='email' onChange={this.handleInputChange} />
            {errors.email.length > 0 && <span className='form__error'>{errors.email}</span>}
          </div>
          <div className='form__buttons'>
            <button className='form__button form__button--cancel' type='button' onClick={this.openModal}>Cancel</button>
            <Modal
              className='modal__content'
              overlayClassName='modal__overlay'
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.state.afterOpenModal}
              onRequestClose={this.state.closeModal}
              contentLabel='Cancel adding new offer'>
              <p>Do you really wish to cancel?</p>
              <p>All data you have entered will be deleted and you will be redirected to Homepage.</p>
              <div className='modal__buttons'>
                <A href={'/'}><button className='modal__button--cancel'>Delete offer</button></A>
                <button onClick={this.closeModal} className='modal__button--submit'>Keep offer</button>
              </div>
            </Modal>
            <button className='form__button form__button--submit' type='submit'>Add offer</button>
          </div>
        </form>
      </div>
    )
  }
}
export default NewOffer
