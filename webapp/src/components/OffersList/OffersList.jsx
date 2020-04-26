import React from 'react'
import { useState, useEffect, useQueryParams } from 'react'
import Offer from '../Offer/Offer'
import host from '../../core/config'

function OffersList() {
  const [categories] = useState(['Art & Antiques',
    'Books',
    'Cell Phones',
    'Computers',
    'Consumer Electronics',
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
  const [filter, setFilter] = useState('0')
  const [sorting, setSorting] = useState('0')

  // Fetch offers
  useEffect(() => {
    let url = `${host}/offers_list?category=0&orderby=date&direction=desc`

    fetch(url, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }, [])

  const handleSelect = (e) => {
    if (e.target.id === 'category') return setFilter(e.target.value)

    return setSorting(e.target.value)
  }

  const sendRequest = () => {
    let order = 'date'
    let direction = 'desc'

    if (sorting >= 2) order = 'price'
    else order = 'date'

    if (sorting === '1' || sorting === '2') direction = 'asc'
    else direction = 'desc'

    let url = `${host}/offers_list?category=${filter}&orderby=${order}&direction=${direction}`

    fetch(url, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        setOffers(offers)
      })
  }

  return (
    <div>
      {/* Dropdown - filter */}
      <select id='category' name='categorySelect' onChange={handleSelect}>
        <option key='0' value='0' label='All'>All</option>
        {categories && categories.map(cat => (
          <option
            key={categories.indexOf(cat)+1}
            label={cat}
            value={categories.indexOf(cat)+1}>{cat}</option>
        ))}
      </select>

      {/* Dropdown - sort */}
      <select id='sort' name='sort' onChange={handleSelect}>
        <option label='date-desc' value='0'>New first</option>
        <option label='date-asce' value='1'>Old first</option>
        <option label='price-asce' value='2'>Price ascending</option>
        <option label='price-desc' value='3'>Price descending</option>
      </select>

      <button onClick={sendRequest}>Submit</button>

      {/* Show offers */}
      {offers && offers.map(offer => (
        <Offer
          key={offers.indexOf(offer)}
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
