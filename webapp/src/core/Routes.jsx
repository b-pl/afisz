import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import OffersList from '../components/OffersList/OffersList'
import OfferDetails from '../components/OfferDetails/OfferDetails'
import NewOffer from '../components/NewOffer/NewOffer'
import NoPageFound from '../components/NoPageFound/NoPageFound'

const routes = {
  '/': () => <Homepage />,
  '/offers': () => <OffersList />,
  '/offers/:offerID': ({ offerID }) => <OfferDetails offerID={ offerID } />,
  '/new-offer': () => <NewOffer />,
}

export default routes
