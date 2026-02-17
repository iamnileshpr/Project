import React from 'react'

function Navigation() {
  return (
    <div>
        <nav className='flex items-center gap-19 justify-between items-center max-w-1280 m-auto h-22'>
        <img className='w-29 flex h-20  mt-5 ml-7 rounded-sm' src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.jpg" alt="" />
           <ul className='flex gap-6 list-none'>
              <a className='font-semibold' href="#">Menu</a>
              <a className='font-semibold'href="#">Location</a>
              <a className='font-semibold'href="#">Contact</a>
              <a className='font-semibold'href="#">About</a>
           </ul>
        <button className='font-sans m-9 px-6 py-4 bg-red-500 rounded-sm font-semibold '>Login</button>
    </nav>
    </div>
  )
}

export default Navigation
