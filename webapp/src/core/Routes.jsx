import React from 'react'
import Homepage from '../components/Homepage/Homepage'
import OffersList from '../components/OffersList/OffersList'

const routes = {
  "/": () => <Homepage />,
  "/offers": () => <OffersList />,
};

export default routes;