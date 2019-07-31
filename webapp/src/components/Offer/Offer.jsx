import React, { useState } from 'react'
import './Offer.css'

class Offer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='offer' id={this.props.id}>
        <a href='https://google.com'><img src="https://www.stevensegallery.com/284/196" className='offer__picture' /></a>
        <div className='description'>
          <a href='https://google.com'><div className='offer__title'>{this.props.title}</div></a>
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