import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'
import axios from 'axios'
import { MeriShop } from '../App'

function Home(){

const [products,setPrducts]=useState(null)

let contextData=useContext(MeriShop)
console.log(contextData);

async function getData(){
let response = await axios.get('https://dummyjson.com/products')
console.log(response.data.products);
setPrducts(response.data.products);
}

useEffect(function(){
  getData()
},[])

  return (
    <div className='bg-black-900 text-white min-h-screen w-full'>
      <Header/>
      <Hero/>
      <div className='p-4'>
        <h1 className='text-4xl tracking-tighter font-semibold'>Our latest collection</h1>
        <div className='flex my-4 items-center flex-wrap gap-3'>
{/*           <Cards/> */}
               {
                 products && products.map((items,index)=><Cards key={index} data={items}/>)
               }
        </div>
      </div>
    </div>
  )
}

export default Home
