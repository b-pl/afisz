import React from 'react'
import './Offer.css'
import { A } from 'hookrouter'

class Offer extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className='offer' id={this.props.id}>
        <A href={'/offers/' + this.props.offerID}><img src="https://www.stevensegallery.com/284/196" className='offer__picture' /></A>
        <div className='offer__description'>
          <A href={'/offers/' + this.props.offerID}><div className='offer__title'>{this.props.title}</div></A>
          <div className='offer__price'>${this.props.price}</div>
          <div className='extra-details'>
            <span className='offer__category'>{this.props.category}</span>
            <span className='offer__date'>{this.props.date}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Offer
