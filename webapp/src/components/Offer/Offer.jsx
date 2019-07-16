import React from 'react'
import './Offer.css'

class Offer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='Offer'>
        <img src="https://via.placeholder.com/500" className='Offer__picture--listview' />
        <div className='Offer__info'>
          <div className='Offer__title--listview'>Huawei P20 Pro Blue [NEW]</div>
          <div className='Offer__price--listview'>$599.99</div>
          <span className='Offer__category--listview'>Phones</span>
          <span className='Offer__date--listview'>13.07.19</span>
        </div>
      </div>
    )
  }
}

export default Offer