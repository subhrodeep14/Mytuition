import React from 'react'

const Navber = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-[#FAFAFA] text-[#3674B5] mx-auto px-7 py-5  '>
        <div className='flex items-center'>
            <h1 className='text-lg font-semibold'>My Tutor</h1>
        </div>
        
        <div className='flex items-center space-x-4'>
            <h1 className='text-lg font-semibold p-2 hover:bg-blue-100'>Become a Tutor</h1>
            <h2 className='text-lg font-semibold'>Login</h2>
        </div>

    </div>
  )
}

export default Navber