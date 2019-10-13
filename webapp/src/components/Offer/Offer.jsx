import React from 'react'
import './Offer.css'
import { A } from 'hookrouter'

function Offer(props) {
  return (
    <div className='offer'>
      <A href={'/offers/' + props.offerID}><img src="https://www.stevensegallery.com/284/196" alt="offer_pic" className='offer__picture' /></A>
      <div className='offer__description'>
        <A href={'/offers/' + props.offerID}><div className='offer__title'>{props.title}</div></A>
        <div className='offer__price'>${props.price}</div>
        <div className='extra-details'>
          <span className='offer__category'>{props.category}</span>
          <span className='offer__date'>{props.date}</span>
        </div>
      </div>
    </div>
  )
}

export default Offer
