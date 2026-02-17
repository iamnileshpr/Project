import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'

function App() {

  return (
   <div>
     <Navigation/>
     <Hero/>
   </div>
  )
}

export default App
