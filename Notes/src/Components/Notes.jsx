import React, { useState } from 'react'

const Notes = () => {
  const [set,setFun] = useState('') 
  const [deatil,detailFun] = useState('')
  const [task , taskFun] = useState([])
  const deleteNote=(index)=>{
    const copy=[...task]
    copy.splice(index,1)
    taskFun(copy)
    
  }
  const submitHnadler=(e)=>{
    e.preventDefault() 
    const copy=[...task]
    copy.push({set,deatil})
    taskFun(copy)
    
    setFun("")
    detailFun("")
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
      onSubmit={(e)=>{
        submitHnadler(e)
      }} 
      className='flex lg:w-1/2 items-start flex-col  p-10'>
        <h1 className='text-3xl font-bold p-3'>Add Notes</h1>
      <div className=' w-full flex gap-4 items-start flex-col '>

        <input type="text" 
        placeholder='Write your Heading'
        value={set}
        onChange={(e)=>{
          setFun(e.target.value)
        }}
        className='px-5 py-2 w-full font-medium border-2 rounded'/>
        
        
        <textarea type="text" 
        placeholder='Write your Notes'
        value={deatil}
        onChange={(e)=>{
          detailFun(e.target.value)
        }}
        className='px-4 font-medium h-40  py-2 w-full border-2 rounded'/>
        <button 
        className='border-2 bg-white text-black  rounded-2xl px-5 py-2'>
            Add my note
        </button>
        </div>
       {/*  <img className='h-80'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2jD4jHXqii8nhc6QYUx7CM23J4mLa4ssYw&s" alt="" /> */}
      </form>
      <div className='p-10 lg:border-l-2 lg:w-1/2 '>
       <h1 className='text-3xl font-bold p-3'>Your notes</h1>
       <div className='flex gap-10 h-full items-start justify-start overflow-auto flex-wrap'>
       {
        task.map((elem,index)=>{
          return <div key={index} className='h-54 flex flex-col relative justify-between items-start  bg-cover pt-9 pb-4 px-5 w-42 bg-[url(https://static.vecteezy.com/system/resources/thumbnails/024/584/462/small_2x/blank-space-white-sticky-note-png.png)] rounded'>
            <div>
            <h1 className='font-bold text-black leading-tight'>{elem.set}</h1>
            <p className='text-gray-700 leading-tight'>{elem.deatil}</p>
            </div>
          <button onClick={()=>{
            deleteNote(index)
          }} className='text-center border-2 w-full py-1 cursor-pointer px-2  bg-red-700 text-2xm rounded-2xl'>Delete</button>  
          </div>
        })
       }
       </div>

      </div>
    </div>
  )
}

export default Notes
