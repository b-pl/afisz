import React from 'react'
import {A} from 'hookrouter'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <A href="/offers">Offers</A>
      </div>
    )
  }
}

export default Homepage