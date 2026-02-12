import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data}) {
  return (
    <div className='w-[31%] p-4 bg-zinc-800  rounded-2xl'>
        <img src={data.thumbnail} alt={data.title} className='mx-auto' />
      <h3 className='text-2xl font-semibold tracking-tighter'>{data.title}</h3>
      <p className='text-sm'>Cateogry : {data.cateogry}</p>
      <h5 className='text-red-600 m-1 text-xl'>MRP : {data.price}</h5>
       <div className='flex  items-center gap-4'>
             <button className='bg-blue-900 text-white px-4 py-2'>Buy Now</button>
             <Link to={`/products/${data.id}`}>View Product</Link>
       </div>
    </div>
  )
}

export default Cards
