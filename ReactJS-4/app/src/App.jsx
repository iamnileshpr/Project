  import React, { useEffect, useState } from 'react'
  import { use } from 'react'
  import styled from 'styled-components'
  import SearchResult from './Components/SearchResult'
  function App() {
    const [data,setData]=useState(null)
    const [loading, setLoading]=useState(false)
    const [err,setErr]=useState(null)



    useEffect(  ()=>{
      const fetchData = async ()=>{
        setLoading(true)
        try {
          const response= await fetch('https://dummyjson.com/recipes')
          const json=await response.json()
          setData(json)
          setLoading(false)
        } catch (error) {
          setErr("unable to fetch data")
        }
      }
      fetchData()
    },[]  )

    console.log(data)

    if(err) return <div>{err}</div>
    if(loading) return <div>loding....</div>
    return (
    <Main_cont>
      <Top_cont>
        <div className='logo'>
          <img className='hii' src="https://dcassetcdn.com/design_img/4037633/521021/30458202/8jx4nkx5jtsyw43tm9nae7dyfs_image.jpg" alt="" />
        </div>
        <div className='search'>
          <input type="text" placeholder='Search your food' />
        </div>
      </Top_cont>
        <Filter_cont> 
              <Button>All</Button>
              <Button>Brakfast</Button>
              <Button>Lunch</Button>
              <Button>Dinner</Button>
        </Filter_cont>
        <SearchResult data={data}/>

    </Main_cont>

    )
  }

  export default App

  const Main_cont=styled.div`

  max-width: 1200px;

  `

  const Top_cont=styled.section`
  min-height:140px;
  display: flex;
  gap: 32cm;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .hii{
    margin-left:5px;
    width: 70px;
    margin-left: 4px;
    border-radius: 3px;
  }

  .search{
    input{
    background-color: transparent;
    border: 1px solid red;
    color:white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    }
  }
  `
  const Filter_cont=styled.div`
    display: flex;
    gap: 12px;
    padding-bottom: 60px;
    margin-left:50% ;
    `

  export const Button=styled.button`
    background-color: red;
    padding: 6px 12px;
    border-radius: 5px;
    border: none;

  `
