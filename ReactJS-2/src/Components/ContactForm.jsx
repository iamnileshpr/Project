import React, { useState } from 'react'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from './ContactHeader/Button';
function ContactForm() {
   const [name, setName] =useState("")
   const [email, setEmail] =useState("")
   const [text, setText] =useState("")

     const onSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value)
   setEmail(event.target[1].value)
   setText(event.target[2].value)
    console.log({name,email,text});

  }
  return (
   <div className='w-fit'>
     <div className='flex  gap-1'>
      <Button className='w-74' text="Support via Chat"  icon={<MdMessage/>}/>
      <Button  className='w-74' text="Support via Call"  icon={<IoCall/>}/>
     </div>
    <Button className='bg-red-800 text-white w-169 mt-4' text="Via Email Form"  icon={<MdEmail/>}/>

    <form action="" className=' ml-19 mt-6 flex-col relative ' onSubmit={onSubmit} >
        <div className='flex flex-col gap-5 '>
              <label htmlFor="name" className='absolute -top-3 left-2 px-5 bg-white' >Name</label>
              <input type="text" name='name' className='border border-black h-10 p-4  rounded-xs w-full' />
              <label htmlFor="email" className='absolute top-11 left-2 px-5 bg-white  ' >Email</label>
              <input type="email" name='email' className='border border-black h-10  p-4 rounded-xs w-full' />
              <label htmlFor="text" className='absolute top-27 left-2  px-4 bg-white ' >Text</label>
              <textarea name="text" rows='12' id="text"  className='border  border-black h-10  p-4 rounded-xs w-full'></textarea>
              <img className='absolute -top-59 left-181' src="https://media.istockphoto.com/id/1210501575/vector/male-hotline-operator-advises-client.jpg?s=612x612&w=0&k=20&c=fRhixOcDvnjDI3Jwi0ZNQ5gcbnksYJNepWlxD1GnWfk=" alt="" />
              <button className=' bg-white text-black border-2 border-black h-10 p-1  mt-8 flex justify-center rounded-xs w-169'>Submit</button>
              <div>{name + " "+ email + " " + text }</div>
        </div>
    </form>
   </div>
  )
}

export default ContactForm
