import React from 'react'
import { useState, useEffect } from 'react'
import Offer from '../Offer/Offer'
import host from '../../core/config'

function OffersList() {
  const [categories] = useState(['Art & Antiques',
    'Books',
    'Cell Phones',
    'Computers',
    'Consumer Eletronics',
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

  useEffect(() => {
    fetch(`${host}/offers_list`, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }, [])


  return (
    <div>
      {offers && offers.map(offer => (
        <Offer
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
