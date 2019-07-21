import React from 'react'
import './Offer.css'

class Offer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='Offer'>
        <a href='https://google.com'><img src="https://www.stevensegallery.com/284/196" className='Offer__picture' /></a>
        <div className='Offer__info'>
          <a href="https://google.com"><div className='Offer__title'>{this.props.title}</div></a>
          <div className='Offer__price'>${this.props.price}</div>
          <div className='Offer__info--flexbox'>
            <span className='Offer__category'>{this.props.category}</span>
            <span className='Offer__date'>{this.props.date}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Offer