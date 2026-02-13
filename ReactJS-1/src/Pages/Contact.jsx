import React, { useContext } from 'react'
import Header from '../Components/Header'
import { MeriShop } from '../App'
import {useForm} from 'react-hook-form'

function Contact() {
let data=  useContext(MeriShop)
/* console.log(data); */
let {register,handleSubmit, reset}=useForm()
console.log();
function onSubmitWala(formKaData){
reset()
}

  return (
    <div className='bg-black-900 text-white min-h-screen w-full'>
        <Header/>
        <form onSubmit={handleSubmit(onSubmitWala)} className='w-1/3 mx-auto h-[80vh] flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
          <label htmlFor="name">Name</label>
          <input {...register("name")} type="text" placeholder='Enter Your Name' className='bg-zinc-800 px-4 py-2 rounded-lg' />
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" placeholder='Enter Your email' className='bg-zinc-800 px-4 py-2 rounded-lg' />
          </div>
          <button type='submit' className='text-white bg-purple-700 px-4 py-2 rounded-lg'>Submit</button>
        </form>
   </div>
  )
}

export default Contact
