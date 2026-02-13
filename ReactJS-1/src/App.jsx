
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Single from './Pages/Single'
import { createContext, useState } from 'react'
export let MeriShop=createContext()  //shop created to store all things

function App() {

  const[data,SetData] =useState('car','phone')
  const [cart,SetCart] = useState([])
return (
    <MeriShop.Provider value={{data,cart,SetData,SetCart}}> 

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/products/:id' element={<Single/>}/>
              <Route path='/cart' element={<Cart/>}/>
        
            </Routes>
        </BrowserRouter>
    </MeriShop.Provider>

  )
}

export default App
