import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalCSS=createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: #030337;
  color: white;
  max-height: 100vh;
  justify-content: space-between;
}
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalCSS/>  
    <App />
  </StrictMode>,
)
