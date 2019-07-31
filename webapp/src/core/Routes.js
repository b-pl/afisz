import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import OffersList from '../components/OffersList/OffersList'
import Offer from '../components/Offer/Offer'

const routes = {
  "/": () => <Homepage />,
  "/offers": () => <OffersList />,
  "/offers/:id": ({id}) => <Offer offerID='1' title='Test title' />
};

export default routes