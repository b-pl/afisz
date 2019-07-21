import React from 'react'
import Offer from '../Offer/Offer'

class OffersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offer: [
        {
          title: 'Huawei P20 Pro Blue [NEW]',
          price: '599,99',
          category: 'Electronics',
          date: '13.07.19'
        },
        {
          title: 'Uranium 1kg',
          price: '49,99',
          category: 'Elements',
          date: '17.07.19'
        },
        {
          title: 'Rammstein - Rammstein',
          price: '19,99',
          category: 'Music',
          date: '17.07.19'
        },
        {
          title: 'Steven Seagal picture',
          price: '9,99',
          category: 'Art',
          date: '21.07.19'
        }
      ]
    }
  }

  render() {
    return(
      <div>
        {this.state.offer.map(offer => (
          <Offer 
            title={offer.title}
            price={offer.price}
            category={offer.category}
            date={offer.date} />
        ))}
      </div>
    )
  }
}

export default OffersList