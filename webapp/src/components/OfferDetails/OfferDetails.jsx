import React from 'react'

class OfferDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offer: [
        {
          title: 'Huawei P20 Pro Blue [NEW]',
          price: '599,99',
          category: 'Electronics',
          date: '13.07.19',
          offerID: 0
        }
      ]
    }
  }

  render() {
    return (
      <div className='details' offerID={this.props.offerID}>
        {this.props.offerID}
      </div>
    )
  }
}

export default OfferDetails