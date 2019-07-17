import React from 'react'
import './Offer.css'

class Offer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    e.preventDefault()
    return document.location = 'https://google.com'
  }

  render() {
    return(
      <div className='Offer'>
        <img src="https://via.placeholder.com/500" className='Offer__picture--listview'
          onClick={this.handleClick} />
        <div className='Offer__info'>
          <div className='Offer__title--listview' onClick={this.handleClick}>{this.props.title}</div>
          <div className='Offer__price--listview' onClick={this.handleClick}>${this.props.price}</div>
          <div className='Offer__info--flexbox'>
            <a href='https://www.allegro.pl/' className='Offer__category--listview'>{this.props.category}</a>
            <span className='Offer__date--listview'>{this.props.date}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Offer

// Questions
// 
// How to make link. Is it better to create another wrapper-div and make it a link
// or is it better to create independent links for every div