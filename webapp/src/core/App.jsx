import React from 'react'
import { useRoutes } from 'hookrouter'
import Routes from './Routes'
import NoPageFound from '../components/NoPageFound/NoPageFound'

function App () {
  const routeResult = useRoutes(Routes)
  return routeResult || <NoPageFound />
};

export default App
