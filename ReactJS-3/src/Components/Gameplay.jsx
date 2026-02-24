import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'

function Gameplay() {

  const resetScore=()=>{
    setScore(0)
  }
  const [score,setScore]= useState(0)
  const [selectedNumber,setNumber] = useState()
  const [current,SetCurrent]=useState(1)
  const [error,setError] = useState("")

  const GenerateRandomNumber=(min , max)=>{ 
    console.log(Math.floor(Math.random()*(max-min) + min) );    
    return Math.floor(Math.random()*(max-min) + min);
  }

const roleDice=()=>{

  if(!selectedNumber) {
      setError("You have not selected any number")
      return
  }

    const randomNumber=GenerateRandomNumber(1,7)
    SetCurrent((prev)=>randomNumber)


    if(selectedNumber==randomNumber){
      setScore  ((prev)=>prev+randomNumber)
    }
    else{
      setScore((prev)=>prev-2)
    }

    setNumber(undefined )
} 




  return (
    <Main_cont>
     <div className='top_section'>
     <TotalScore score={score}/>
      <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setNumber={setNumber}/>
     </div>
     <RollDice current={current} roleDice={roleDice}/>
     <div>
      <button className='btn'>Result</button>
      <button onClick={resetScore} className='btn1' >Reset</button>
     </div>
    </Main_cont>
  )
}

export default Gameplay


const Main_cont=styled.main `
padding-top: 30px;
  .top_section{
    justify-content: space-around;
    align-items: end;
    display: flex;

  }
  .btn{
   background-color: black;
   display: flex;
   width: 122px;
   padding: 21px;
   margin-left:46% ;
   flex-direction: column;
   gap: 22px;
   color: white;
   font-weight: 500;
   font-size: large;
   align-items: center;
   justify-content: center;   
   border-radius: 8px;
   &:hover{
    background-color: white;
      color: black;
   }

  }

  .btn1{
    background-color: black;
   display: flex;
   width: 122px;
   padding: 21px;
   margin-left:46% ;
   flex-direction: column;
   gap: 22px;
   color: white;
   font-weight: 500;
   font-size: large;
   align-items: center;
   justify-content: center;
   margin-top: 14px;
   border-radius: 8px;
   &:hover{
    background-color: white;
      color: black;
   }
  }
`
