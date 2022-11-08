import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 w-full z-[100] absolute'>
        <h1 className='text-red-500 text-3xl font-bold'>THE MOVIE HUB</h1>
        <div>
            <button className='text-white bg-red-500 px-6 py-2 rounded cursor-pointer'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar