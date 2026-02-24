import React from 'react'
import styled from 'styled-components'
import { Button } from '../App'

function SearchResult({data}) {
  return (
    <div>
        <Food_cont>
          <Food_cards>
          {
            data?.recipes?.slice(0,9).map(({name,image,cuisine,id,caloriesPerServing} )=>(
            <Food key={id}>
            <div className='food_image'>
            <img className='img1' src={image} alt="" />
            </div>
            <div className='food_info'>
              <div className='info'>
                <h3>{name}</h3>
                <p>{cuisine}</p>
              </div>
              <Button>${caloriesPerServing.toFixed(2)}</Button>
            </div>
            </Food>)) 
          }
          </Food_cards>
        </Food_cont>
    </div>
  )
}

export default SearchResult

const Food_cont = styled.section`
height: calc(100vh - 210px);
width:220vh;
background-image: url("https://wallpapers.com/images/hd/4k-b6ytxiu9nhr4w4p7.jpg");
background-size: cover;
`
const Food_cards= styled.div`

display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 👈 3 cards per row */
  gap: 24px;
  padding: 40px;

  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Food=styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .food_image {
    width: 100%;
    height: 220px;   /* 👈 bigger image */
    overflow: hidden;
  }

  .img1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .food_info {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info h3 {
    margin: 0;
    font-size: 18px;
  }

  .info p {
    margin: 4px 0 0;
    font-size: 14px;
    opacity: 0.85;
  }
`