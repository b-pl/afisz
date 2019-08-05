import React from 'react'
import './OfferDetails.css'


class OfferDetails extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      offer: [
        {
          offerID: 0,
          title: 'Huawei P20 Pro Blue [NEW]',
          price: '599,99',
          category: 'Electronics',
          date: '13.07.19',
          description: 'Lorem Ipsum',
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          phone: '555-1234'
        },
        {
          offerID: 1,
          title: 'Uranium 1kg',
          price: '49,99',
          category: 'Elements',
          date: '17.07.19',
          description: '',
          name: '',
          email: '',
          phone: ''
        },
        {
          offerID: 2,
          title: 'Rammstein - Rammstein',
          price: '19,99',
          category: 'Music',
          date: '17.07.19',
          description: '',
          name: '',
          email: '',
          phone: ''
        },
        {
          offerID: 3,
          title: 'Steven Seagal picture',
          price: '9,99',
          category: 'Art',
          date: '21.07.19',
          description: '',
          name: '',
          email: '',
          phone: ''
        }
      ]
    }
  }

  render () {
    const id = this.props.offerID
    return (
      <div className='offer-details' offerID={this.props.offerID}>
        <div className='offer-details__picture'></div>
        <div className='offer-details__basics'>
          <div className='offer-details__title'>{this.state.offer[id].title}</div>
          <div className='offer-details__price'>${this.state.offer[id].price}</div>
        </div>
        <div className='offer-details__extras'>{this.state.offer[id].category}, {this.state.offer[id].date}</div>
        <div className='offer-details__description'>{this.state.offer[id].description}</div>
        <div className='contact-info'>
          <div className='contact-info__name'>{this.state.offer[id].name}</div>
          <div className='contact-info__email'>{this.state.offer[id].email}</div>
          <div className='contact-info__phone'>{this.state.offer[id].phone}</div>
        </div>
      </div>
    )
  }
}

export default OfferDetails
