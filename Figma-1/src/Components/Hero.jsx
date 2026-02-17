import React from 'react'

function Hero() {
  return (
    <main className='flex  items-center gap-28 ml-6 mt-17 '>
        <div className='ml-15 '>
            <h1 className='font-[1000] leading-21 text-8xl'>
            YOUR FEET <br/>DESERVE
            <br /> THE BEST
            </h1>
            <p className='font-semibold text-gray-800 leading-6 mt-8'>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
            SHOES. <br/>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH 
            OUR 
            SHOES.
            </p>
            <div className='flex gap-8 m-5'>
                <button className='border-2 bg-red-600 rounded-sm text-white border-solid solid-red p-3'>Shop Now</button>
                <button className='border-2 bg-transparent rounded-sm text-gray border-solid solid-gray p-3'>Cateogry</button>
                
            </div>
                <p className='mb-4 text-gray-800 font-semibold text-sm'>Also available on </p>
                <img className='w-69 mt-1 h-25 ' src="https://media.licdn.com/dms/image/v2/C4D12AQFxJtH_9xo-CQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520080587500?e=2147483647&v=beta&t=WZ1QNkyEK3rCJTetiSK2u6KGD-zzlsdVPPi3BIFBlQc" alt="" />
            
        </div>
        <div>
            <img className='w-full max-h-140 ml-28 mb-5 h-129 rounded-sm' src="https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/p/r/p/-original-imah6f53fymygmxw.jpeg?q=90" alt="" />
        </div>
    </main>
  )
}

export default Hero
