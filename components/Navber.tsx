import React from 'react'

const Navber = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-[#FAFAFA] text-[#3674B5] mx-auto px-7 py-5 '>
        <div className='flex items-center'>
            <h1>My Tutor</h1>
        </div>
        <div className='flex items-center space-x-4'>
            <search>
                <input type="text" placeholder="Search for tutors or subjects..." />
                <button type="submit">Search</button>
            </search>
        </div>
        <div className='flex items-center space-x-4'>
            <h1>Become a Tutor</h1>
            <h2>Login</h2>
        </div>

    </div>
  )
}

export default Navber