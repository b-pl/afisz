import React from 'react'
import { useState, useEffect } from 'react'
import Offer from '../Offer/Offer'
import host from '../../core/config'

function OffersList(props) {
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
  const [currentCategory, setCurrentCategory] = useState()

  // Fetch offers
  useEffect(() => {
    let url = `${host}/offers_list`
    if(props.category) url = `${host}/offers_list/${props.category}`

    fetch(url, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }, [])

  const selectCategory = (e) => {
    // Get selected value
    const val = e.target.value
    setCurrentCategory(val)

    // Do nothing if category was not selected
    if(val === 'all') return

    // Fetch offers from selected category
    fetch(`${host}/offers_list/${val}`, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }

  const sort = (e) => {
    return 
  }


  return (
    <div>
      {/* Dropdown - filter */}
      <select id='category' name='categorySelect' onChange={selectCategory}>
        <option value='all'>All</option>
        {categories && categories.map(cat => (
          <option value={cat}>{cat}</option>
        ))}
      </select>

      {/* Dropdown - sort */}
      <select id='sort' name='sort' onChange={sort}>
        <option value='noneSelected'>Sort...</option>
        <option value='cheap'>From cheapest</option>
        <option value='expensive'>From most expensive</option>
        <option value='new'>From newest</option>
        <option value='old'>From oldest</option>
      </select>

      {/* Show offers */}
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
