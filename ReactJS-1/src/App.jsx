
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Single from './Pages/Single'

function App() {

  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products/:id' element={<Single/>}/>

    </Routes>
</BrowserRouter>
  )
}

export default App
