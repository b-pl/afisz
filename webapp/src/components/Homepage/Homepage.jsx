import React from 'react'
import { A } from 'hookrouter'

function Homepage (props) {
  return (
    <div>
      <p><A href='/offers'>Offers</A></p>
      <p><A href='/new-offer'>New Offer</A></p>
    </div>
  )
}

export default Homepage
