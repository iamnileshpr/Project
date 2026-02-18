import React from 'react'

function Button(props) {
  return (
    <div>
        <button onSubmit={props.onSubmit} className={`ml-19 mt-6 flex items-center justify-center gap-2 px-5 py-5 text-white bg-black border-2 border-solid  rounded-md ${props.className}`}>
        {props.icon}
        {props.text}
        </button>
    </div>
  )
}

export default Button
