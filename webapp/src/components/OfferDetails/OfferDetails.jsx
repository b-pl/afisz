import React from 'react'

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
          description: ''
        },
        {
          offerID: 1,
          title: 'Uranium 1kg',
          price: '49,99',
          category: 'Elements',
          date: '17.07.19',
          description: ''
        },
        {
          offerID: 2,
          title: 'Rammstein - Rammstein',
          price: '19,99',
          category: 'Music',
          date: '17.07.19',
          description: ''
        },
        {
          offerID: 3,
          title: 'Steven Seagal picture',
          price: '9,99',
          category: 'Art',
          date: '21.07.19',
          description: ''
        }
      ]
    }
  }

  render () {
    const id = this.props.offerID
    return (
      <div className='details' offerID={this.props.offerID}>
        <p>offerID: {this.props.offerID}</p>
        <p>Title: {this.state.offer[id].title}</p>
      </div>
    )
  }
}

export default OfferDetails
