import React, { useState } from 'react'
import styled from 'styled-components'


function RollDice({roleDice,current}) {


 
  return (
    <DiceCont>
        <div className='dice' onClick={roleDice}>
           <img src={`/images/dice/dice_${current}.png`} alt="dice2 " />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceCont  >
  )
}

export default RollDice

const DiceCont=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}
    
`