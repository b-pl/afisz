import React from 'react'
import Offer from '../Offer/Offer'
import host from '../../core/config'

class OffersList extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      offers: [],
    }
  }

  componentDidMount() {
    fetch(`${host}/offers_list`, {
      accept: 'application/json',
    })
      .then(res => res.json())
      .then(data => {
        const offers = data
        this.setState({offers})
      })  
  }

  render () {
    return (
      <div>
        {this.state.offers && this.state.offers.map( offer => (
          <Offer
            title={offer.title}
            price={offer.price}
            category={offer.category}
            date={offer.date}
            offerID={offer.offerID} />
        ))}
      </div>
    )
  }
}

export default OffersList
