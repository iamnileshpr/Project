import React from 'react'
import styled from 'styled-components'

function TotalScore({score}) {
  return (
    <ScoreContainer>
       <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 110px;
text-align: center;
    h1{
        font-size: 100px;
        line-height: 5px;

    }
    p{
        font-size: 30px;
        white-space: nowrap;
    }
`
