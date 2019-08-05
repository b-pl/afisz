import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import OffersList from '../components/OffersList/OffersList'
import OfferDetails from '../components/OfferDetails/OfferDetails'

const routes = {
  '/': () => <Homepage />,
  '/offers': () => <OffersList />,
  '/offers/:offerID': ({ offerID }) => <OfferDetails offerID={ offerID } />
}

export default routes
