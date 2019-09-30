import React from 'react'
import { A } from 'hookrouter'
import './NoPageFound.css'

function NoPageFound(props) {
  return(
    <div className="container">
      <div className="emoji">
        <span>🙊</span>
      </div>
      <div className="message">
        <div className="message__text--big">Oh no!</div>
        <div className="message__text">There's nothing here!</div>
        <div className="message__text--small">Click the button to browse offers</div>
      </div>
      <A href='/offers'><button type='button' className='button'>Offers</button></A>
    </div>
  )
}

export default NoPageFound 