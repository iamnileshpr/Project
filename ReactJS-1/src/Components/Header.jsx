import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='px-4 py-4 flex items-center justify-between'>
      <h1 className='text-xl'>E-Commerce</h1>
      <div className='flex items-center gap-4'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>       
      </div>
    </div>
  )
}

export default Header
