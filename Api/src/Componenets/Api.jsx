import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
  const[userData, setData] =useState([]) 
  const [page,setPage] = useState(1)
  const getData=async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    setData(response.data)
    
  }
  useEffect(function(){
    getData()
  },[page])
    let printUser = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
    if(userData.length>0){
      printUser=userData.map(function(elem,index){
    return <div key={index}>
      <a href={elem.url} target='_blank'>
      <div className='h-50 w-54 mb-10 overeflow-hidden rounded-4xl'>
      <img className=' h-full w-full rounded-2xl object-cover' src={elem.download_url} alt=""/>
      </div>
      <h1 className='font-bold text-lg'>{elem.author}</h1>
  
      </a>
    </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen text-white p-4'>
        <div className='flex flex-wrap gap-5 mt-16 rounded-5xl py-4 px-4'>
          {printUser}
        </div>
        <div className='flex justify-center items-centre gap-6 p-4'>
          <button
          style={{opacity:page==1  ? 0.5 :1 }}
          onClick={()=>{
            if(page>1){
              setPage(page-1)
              
            }
          }}
          className='bg-amber-400 text-sm  text-black font-bold rounded-xl px-4 py-2'>Prev</button>
          <h4 className='text-xl'>page {page}</h4>
          <button 
          onClick={()=>{
            
            setPage(page+1)
          }} className='bg-amber-400 text-sm  text-black font-bold rounded-xl px-4 py-2'>Next</button>
        </div>
    </div>
  )
}

export default Api