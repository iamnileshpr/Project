import React from 'react'

function Navigation() {
  return (
    <nav className='flex items-center justify-between p-2'>
        <div className='ml-4'>
        <img className='max-w-27 ' src="https://img.freepik.com/free-psd/contact-us-label-illustration_23-2151600828.jpg?semt=ais_wordcount_boost&w=740&q=80" alt="" />
        </div>
        <ul className='flex  gap-8 mt-2 mr-4 font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation
