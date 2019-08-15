import React from 'react'
import './OfferDetails.css'
import avatar from '../../images/avatar_placeholder.png'
import email from '../../images/email_placeholder.png'
import phone from '../../images/phone_placeholder.png'

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
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi repellendus accusamus, in maiores odit modi explicabo unde deserunt odio. Ipsam fugit laboriosam quidem iste sequi quis quo harum possimus.',
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          phone: '555-123-456'
        },
        {
          offerID: 1,
          title: 'Uranium 1kg',
          price: '49,99',
          category: 'Elements',
          date: '17.07.19',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima blanditiis cumque praesentium aut possimus repellat. Iste nemo beatae dignissimos a, temporibus ex ipsum dolorum dolore, quidem, eaque culpa reiciendis fugit. Dolorum repudiandae perferendis ab! Veritatis asperiores tempora sapiente, delectus totam dignissimos quae quaerat ut praesentium, accusamus eveniet dicta pariatur sed optio sequi eaque velit illum neque officiis. Aspernatur, cupiditate molestiae?',
          name: 'Emilia Ashton',
          email: 'emilia.ashton@yahoo.com',
          phone: '555-123-123'
        },
        {
          offerID: 2,
          title: 'Rammstein - Rammstein',
          price: '19,99',
          category: 'Music',
          date: '17.07.19',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi repellendus accusamus, in maiores odit modi explicabo unde deserunt odio. Ipsam fugit laboriosam quidem iste sequi quis quo harum possimus.',
          name: 'Mindy Dunlop',
          email: 'mindy889@gmail.com',
          phone: '555-555-555'
        },
        {
          offerID: 3,
          title: 'Steven Seagal picture',
          price: '9,99',
          category: 'Art',
          date: '21.07.19',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima blanditiis cumque praesentium aut possimus repellat. Iste nemo beatae dignissimos a, temporibus ex ipsum dolorum dolore, quidem, eaque culpa reiciendis fugit. Dolorum repudiandae perferendis ab! Veritatis asperiores tempora sapiente, delectus totam dignissimos quae quaerat ut praesentium, accusamus eveniet dicta pariatur sed optio sequi eaque velit illum neque officiis. Aspernatur, cupiditate molestiae?',
          name: 'Ben Rodgers',
          email: 'crazy_benny69@aol.com',
          phone: '555-CRAZY!'
        }
      ]
    }
  }

  render () {
    const id = this.props.offerID
    return (
      <div className='offer-details' offerID={this.props.offerID}>
        <img src="https://www.stevensegallery.com/284/196" className='offer-details__picture' />
        <div className='offer-details__basics'>
          <div className='offer-details__title'>{this.state.offer[id].title}</div>
          <div className='offer-details__price'>${this.state.offer[id].price}</div>
        </div>
        <div className='offer-details__extras'>{this.state.offer[id].category}, {this.state.offer[id].date}</div>
        <div className='offer-details__description'>
          <div className='offer-description__text'>{this.state.offer[id].description}</div>
        </div>
        <div className='contact-info'>
          <div className='contact-info__name'>
            <img src={ avatar } className='contact-info__icon' />
            <span className='contact-info__text'>{this.state.offer[id].name}</span>
          </div>
          <div className='contact-info__email'>
            <img src={ email } className='contact-info__icon' />
            <span className='contact-info__text'>{this.state.offer[id].email}</span>
          </div>
          <div className='contact-info__phone'>
            <img src={ phone } className='contact-info__icon' />
            <span className='contact-info__text'>{this.state.offer[id].phone}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default OfferDetails
