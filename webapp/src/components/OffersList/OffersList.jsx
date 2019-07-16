import React from 'react'
import Offer from '../Offer/Offer'

class OffersList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Offer />
        <Offer />
      </div>
    )
  }
}

export default OffersList