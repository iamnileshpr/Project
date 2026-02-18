import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Contact from './Components/ContactHeader/contact'
import ContactForm from './Components/ContactForm'

function App() {
  return (
   <div>
       <Navigation/>
       <Contact/>
       <ContactForm/>
   </div>
  )
}

export default App
