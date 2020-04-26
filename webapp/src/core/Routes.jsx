import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import OffersList from '../components/OffersList/OffersList'
import OfferDetails from '../components/OfferDetails/OfferDetails'
import NewOffer from '../components/NewOffer/NewOffer'

const routes = {
  '/': () => <Homepage />,
  '/offers*': () => <OffersList />,
  '/offers/:offerID': ({ offerID }) => <OfferDetails offerID={ offerID } />,
  '/offers/category/:category': ({ category }) => <OffersList category={ category } />,
  '/new-offer': () => <NewOffer />,
}

export default routes
