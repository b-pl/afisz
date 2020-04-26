import React from 'react'
import { A } from 'hookrouter'
import host from '../../core/config'
import { useState } from 'react'

function Homepage (props) {
  const [foo, setFoo] = useState()

  const sendReq = () => {
    let a = document.querySelector('.inp').value
    let url = `${host}/test?${a}`
    console.log('url = ' + url)
  
    fetch(url, {
      accept: 'application/json'
    })
      .then(res => res.json())
      .then(par => {
        console.log(par)
      })
  }

  return (
    <div>
      <p><A href='/offers'>Offers</A></p>
      <p><A href='/new-offer'>New Offer</A></p>

      <div className='qwe'>
        {foo}
      </div>

      <input type='text' className='inp' />
      <button type='button' onClick={sendReq}>SEND</button>

    </div>
  )
}

export default Homepage