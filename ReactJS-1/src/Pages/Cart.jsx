import React, { useContext } from 'react'
import { MeriShop } from '../App'

function Cart() {
   let {cart}= useContext(MeriShop)
  return (
    <div className='bg-black-900 text-white min-h-screen w-full'>
      {cart && cart.map((item)=><h1>{item.title}</h1>)}
    </div>
  )
}

export default Cart
