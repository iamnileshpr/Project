import React, { useState } from 'react'
import styled from 'styled-components'



function NumberSelector({error,selectedNumber,setNumber, setError}) {
  const arr=[1,2,3,4,5,6]

  const selectHandler=(value)=>{
    setNumber(value)
    setError(" ")
  }

console.log(selectedNumber);
  return (
<NumberSelect>
  <p className='err'>{error}</p>
      <div className='flex'>
        {
            arr.map((value,ind)=>(
                <Box key={ind} isSelected={value==selectedNumber} onClick={()=>selectHandler(value)}>{value}</Box>
            ))
        }
      </div>
      <p>Select Number</p>
</NumberSelect>

  )
}

export default NumberSelector

const NumberSelect=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 24px;
}
.err{
  color: red;
}
  
  p{
    font-size: 24px;
    font-weight: 400;
    line-height: 1px;
  }
`

const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    place-items: center;
    display: grid;
    font-weight: 800;
    font-size: 24px;
    color: black;
    background-color: ${(props)=>props.isSelected ? 'black' : 'white'};
    color: ${(props)=>props.isSelected? 'white' : 'black'};
`
