import React from 'react'

const Header = () => {
  return (
   <div>
    <div className='flex flex-row mt-2 jusitfy-start'>
        <div className='ml-3 w-2/5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 200 100">
        <rect width="100%" height="100%" fill="darkviolet" />

        <path d="M100,20 L20,80 L180,80 Z" fill="#FFD780" />

        <text x="80" y="70" fontSize="40" fill="#000">M</text>
        </svg>
        </div>
        <div className='w-3/5 text-start text-4xl mx-8'>Dominion Pizza</div>
        
    </div>
    <hr className="w-full mt-2 border-t-2 border-grey-500" />
   </div>
  )
}

export default Header