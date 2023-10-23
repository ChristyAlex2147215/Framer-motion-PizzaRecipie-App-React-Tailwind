import React from 'react'

const Button = ({title,borderColor,bgColor,onClick}) => {
  return (
    <button className="border-5 rounded bg-red-300 w-1/6 h-10 justify-center align-center content-center" onClick={onClick}>
        {title}
    </button>
  )
}

export default Button