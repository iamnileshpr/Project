import styled from 'styled-components'
import StartGame from './Components/StartGame';
import { useState } from 'react';
import Gameplay from './Components/Gameplay';



function App() {

  const [gameStarted, SetGameStarted]= useState(false)

  function toggle(){
    SetGameStarted(function (prev){
      return !prev
    })
  }

  return (
    <>
    {
      gameStarted ? <Gameplay/> :<StartGame toggle={toggle}/>   }
    </>
 
  )
}

export default App


const Button=styled.button `
background-color:black;
color:white;
padding:10px`;