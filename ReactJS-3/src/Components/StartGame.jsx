import React from 'react'
import styled from 'styled-components'

function StartGame(props) {
  return (
   <Container>
    <div>
    <img src="https://img.freepik.com/premium-photo/png-two-dice-game_53876-804863.jpg?semt=ais_user_personalization&w=740&q=80" alt="" />
    </div>
       <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={props.toggle}>Play Game</Button>
       </div>
   </Container>
  )
}

export default StartGame

const Container=styled.div`
  max-width: fit-content;
  max-height: fit-content;
  display: flex;
  margin:0 auto;
  align-items: center;
  
  .content h1{
    font-size: 96px;
    white-space: nowrap;
   transition: 0.3s background ease-in;
  }
`
const Button = styled.button`
  color: white;
  background-color: black;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border:none ;
  font-size: 16px;
  &:hover {
  background-color: white;
  border: 1px solid black;
  color: black;
  }
`
