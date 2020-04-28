import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import OffersList from '../components/OffersList/OffersList'
import OfferDetails from '../components/OfferDetails/OfferDetails'
import NewOffer from '../components/NewOffer/NewOffer'
import NewOfferOLD from '../components/NewOffer/NewOfferOLD'

const routes = {
  '/': () => <Homepage />,
  '/offers': () => <OffersList />,
  '/offers/:offerID': ({ offerID }) => <OfferDetails offerID={ offerID } />,
  '/offers/category/:category': ({ category }) => <OffersList category={ category } />,
  '/new-offer': () => <NewOffer />,
  '/new-offerOLD': () => <NewOfferOLD />,
}

export default routes
