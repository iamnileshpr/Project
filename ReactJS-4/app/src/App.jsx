  import React, { useEffect, useState } from 'react'
  import { use } from 'react'
  import styled from 'styled-components'
  import SearchResult from './Components/SearchResult'
import Footer from './Components/Footer'
  function App() {
    const [data,setData]=useState(null)
    const [filter,setFilter]=useState(null)
    const [loading, setLoading]=useState(false)
    const [err,setErr]=useState(null)
    const [selectedBtn,setSelectedBtn]=useState('all')


    useEffect(  ()=>{
      const fetchData = async ()=>{
        setLoading(true)
        try {
          const response= await fetch('https://dummyjson.com/recipes')
          const json=await response.json()
          setData(json)
          setFilter(json)
          setLoading(false)
        } catch (error) {
          setErr("unable to fetch data")
        }
      }
      fetchData()
    },[]  )

    console.log(data)

    const searchFood = (e)=>{
      const searchValue=e.target.value;

      console.log(searchValue);

      if(searchValue==="")
        {setFilter(data)} 

      const filterNew = data?.recipes?.filter((food)=>
      food.name.toLowerCase().includes(searchValue.toLowerCase()));

      setFilter({recipes:filterNew})
    }

    const filterFood =(mealType)=>{
      if(mealType=='all'){
        setFilter(data);
        setSelectedBtn('all')
      }
      const filterNew1 = data?.recipes?.filter((food)=>
      food.mealType.some((type)=>type.toLowerCase()===mealType.toLowerCase()));

      setFilter({ recipes: filterNew1 })
      setSelectedBtn(mealType)
    }

    const filterBtn=[
      { name: "All", mealType: "all" },
      { name: "Breakfast", mealType: "breakfast" },
      { name: "Dinner", mealType: "dinner" },
      { name: "Lunch", mealType: "lunch" },
    ]

    if(err) return <div>{err}</div>
    if(loading) return <div>loding....</div>
    return (
    <Main_cont>
      <Top_cont>
        <div className='logo'>
          <img className='hii' src="https://dcassetcdn.com/design_img/4037633/521021/30458202/8jx4nkx5jtsyw43tm9nae7dyfs_image.jpg" alt="" />
        </div>
        <div className='search'>
          <input onChange={searchFood} type="text" placeholder='Search your food' />
        </div>
      </Top_cont>
        <Filter_cont> 
          {
            filterBtn.map((value)=>(
              <Button key={value.name} onClick={()=>filterFood(value.mealType)}>{value.name}</Button>
            ))
          }
        </Filter_cont>
        <SearchResult data={filter}/>
        <Footer/>

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
    background-color: #FFAA00;
    padding: 6px 12px;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    font-family: sans-serif;
    &:hover{
        background-color:#F5E7C6 ;
        cursor: pointer;
    }

  `
