import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Single() {
  let {id }=  useParams()
  console.log(id);
const [products,setProducts]=useState(null)

async function getData(){
    let response=await axios.get(`https://dummyjson.com/products/${id}`)
    console.log(response);
    setProducts(response.data)
}
useEffect(function(){
getData()
},[])
  return products && (
    <div className='bg-black p-12 w-full min-h-screen text-white'>
        <Link to={'/'}>Back</Link>
        <div className='flex gap-4'>
            <img src={products.thumbnail} alt="" className='w-1/2' />
<div className='flex flex-col gap-4 w-[60%]'>
    <h1 className='text-4xl font-bold'>{products.title}</h1>
    <p>{products.description}</p>
</div>
        </div>
    </div>
  )
}

export default Single
