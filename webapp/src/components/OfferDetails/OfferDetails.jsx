import React from 'react'
import './OfferDetails.css'
import avatar from '../../images/avatar_placeholder.png'
import email from '../../images/email_placeholder.png'
import phone from '../../images/phone_placeholder.png'
import host from '../../core/config'

class OfferDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      offerID: null,
      title: null,
      price: null,
      category: null,
      date: null,
      email: null,
      name: null,
      phone: null,
      description: null
    }
  }

  componentDidMount () {
    fetch(`${host}/offer/${this.props.offerID}`, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(data => {
        const offer = data[0]
        this.setState(offer)
      })
  }

  render () {
    return (
      <div className='offer-details' offerid={this.state.offerID}>
        <img src="https://www.stevensegallery.com/284/196" className='offer-details__picture'
          alt="Miniature of one of offers photos." />
        <div className='offer-details__basics'>
          <div className='offer-details__title'>{this.state.title}</div>
          <div className='offer-details__price'>${this.state.price}</div>
        </div>
        <div className='offer-details__extras'>{this.state.category}, {this.state.date}</div>
        <div className='offer-details__description'>
          <div className='offer-description__text'>{this.state.description}</div>
        </div>
        <div className='contact-info'>
          <div className='contact-info__name'>
            <img src={ avatar } className='contact-info__icon' alt="" />
            <span className='contact-info__text'>{this.state.name}</span>
          </div>
          <div className='contact-info__email'>
            <img src={ email } className='contact-info__icon' alt="" />
            <span className='contact-info__text'>{this.state.email}</span>
          </div>
          <div className='contact-info__phone'>
            <img src={ phone } className='contact-info__icon' alt="" />
            <span className='contact-info__text'>{this.state.phone}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default OfferDetails
