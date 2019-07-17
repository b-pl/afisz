import React from 'react'
import Offer from '../Offer/Offer'

class OffersList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Offer 
          title='Huawei P20 Pro Blue [NEW]'
          price='599,99'
          category='Electronics'
          date='13.07.19' />
        <Offer
          title='Uranium 1kg'
          price='49,99'
          category='Elements'
          date='17.07.19' />
        <Offer
          title='Rammstein - Rammstein'
          price='19,99'
          category='Music'
          date='17.07.19' />
      </div>
    )
  }
}

export default OffersList