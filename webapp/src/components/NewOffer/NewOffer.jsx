import React from 'react'
import './NewOffer.css'
import Modal from 'react-modal'
import { A } from 'hookrouter'
import host from '../../core/config'

class NewOffer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: [],
      modalIsOpen: false,
      lastID: [],
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

    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
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
    if (currentDay < 10) currentDay = '0' + currentDay
    const returnDate = currentDate.getFullYear() + '-' + currentMonth + '-' + currentDay
    return returnDate
  }

  componentDidMount () {
    Promise.all([fetch(`${host}/offers`), fetch(`${host}/newofferID`)])
      .then(([category, lastID]) => {
        return Promise.all([category.json(), lastID.json()])
      })
      .then(([category, lastID]) => {
        this.setState({
          category,
          lastID
        })
      })
  }

  render () {
    return (
      <div className='new-offer' id='new-offer'>
        <form className='form' action={host+'/offers'} method='POST'>
          <div className='form__input-block'>
            <label className='form__label'>Category: </label>
            <select name='category' className='form__input'>
              {this.state.category && this.state.category.map(category => (
                <option value={category.category}>{category.category}</option>
              ))}
            </select>
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Title: </label>
            <input className='form__input' type='text' name='title' id='title' onChange={this.handleInputChange} />
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Price: </label>
            <input className='form__input price' type='number' name='price' id='price' onChange={this.handleInputChange} />
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Description: </label>
            <textarea className='form__input description' name='description' id='description' onChange={this.handleInputChange} rows='10' />
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Name: </label>
            <input className='form__input' type='text' name='name' id='name' onChange={this.handleInputChange} />
          </div>
          <div className='form__input-block'>
            <label className='form__label'>Phone no: </label>
            <input className='form__input' type='text' name='phone' id='phone' onChange={this.handleInputChange} />
          </div>
          <div className='form__input-block'>
            <label className='form__label'>E-mail: </label>
            <input className='form__input' type='text' name='email' id='email' onChange={this.handleInputChange} />
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
          {/* SEND offerID TO SERVER */}
          <input type='hidden' name='offerID' value={this.state.lastID && this.state.lastID.map(ID => (ID.offerID + 1))}></input>
          <input type='hidden' name='date' value={this.getDate()}></input>
        </form>
      </div>
    )
  }
}
export default NewOffer
