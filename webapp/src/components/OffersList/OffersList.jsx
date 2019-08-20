import React from 'react'
import Offer from '../Offer/Offer'

class OffersList extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      offer: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/offers_list', {
      accept: 'application/json',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          offer: data
        })
      })  
  }

  render () {
    return (
      <div>
        {this.state.offer && this.state.offer.map( offer => (
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
