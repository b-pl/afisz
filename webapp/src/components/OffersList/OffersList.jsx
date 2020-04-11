import React from 'react'
import Offer from '../Offer/Offer'
import host from '../../core/config'

class OffersList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      offers: [],
      categories: ['Art & Antiques',
        'Books',
        'Cell Phones',
        'Computers',
        'Consumer Eletronics',
        'Health & Beauty',
        'Home & Garden',
        'Jewelry',
        'Movies',
        'Music',
        'Pets',
        'Sporting Goods',
        'Toys',
        'Video Games & Consoles'],
        selectedOffers: [],
        selectedCategory: 'Music'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e){
    this.setState({ selectedCategory: e.target.value })
    const target = e.target.value

    Object.keys(this.state.offers).forEach((offer => 
      // console.log(this.state.offers[offer]))) 
      this.state.offers[offer].category === target
      ? this.setState({ selectedOffers: [...this.state.selectedOffers, this.state.offers[offer]] })
      : console.log("Error :(")))
  }

  showOffers() {
    return () => this.state.selectedOffers.length === '0'
          ? this.state.offers && this.state.offers.map(offer => (
            <Offer
              title={offer.title}
              price={offer.price}
              category={offer.category}
              date={offer.date}
              offerID={offer.id} />
          ))
          : this.state.selectedOffers && this.state.selectedOffers.map(offer => (
            <Offer
              title={offer.title}
              price={offer.price}
              category={offer.category}
              date={offer.date}
              offerID={offer.id} />
          ))
  }

  componentDidMount () {
    fetch(`${host}/offers_list`, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(offers => {
        this.setState({offers})
      })  
  }

  render() {
    return (
      <div>
        <select name='category' onChange={this.handleInputChange}>{this.state.categories && this.state.categories.map(category => (
          <option value={category}>{category}</option>
        ))}</select>

        {/* {this.showOffers()} */}

       {/* {() => this.state.selectedOffers.length === '0'
          ? this.state.offers && this.state.offers.map(offer => (
            <Offer
              title={offer.title}
              price={offer.price}
              category={offer.category}
              date={offer.date}
              offerID={offer.id} />
          ))
          : this.state.selectedOffers && this.state.selectedOffers.map(offer => (
            <Offer
              title={offer.title}
              price={offer.price}
              category={offer.category}
              date={offer.date}
              offerID={offer.id} />
          ))
         } */}
        { this.state.offers && this.state.offers.map(offer => (
          <Offer
            title={offer.title}
            price={offer.price}
            category={offer.category}
            date={offer.date}
            offerID={offer.id} />
        ))}
      </div>
    )
  }
}


export default OffersList
