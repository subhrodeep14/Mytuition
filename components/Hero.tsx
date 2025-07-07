import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center  h-screen bg-gradient-to-b from-[#FAFAFA] to-[#5993d1] text-[#2f659f] px-4 '>
      <h1 className='text-6xl font-bold mb-4'>Clear your concepts with your favorite tutor</h1>
      <p className='text-lg text-center text-[#1b3f65] max-w-2xl'>
        Find the perfect tutor for your learning needs. Explore a variety of subjects and connect with experienced educators.
      </p>
       
        <div className='mt-8 w-full '>
            <search className='flex items-center mt-6 justify-between bg-white shadow-md rounded-2xl p-4 max-w-2xl mx-auto'>
                <input  type="text" placeholder="Search for tutors or subjects" className="px-4 py-2 w-full  rounded-lg" />
                <button className='bg-[#3674B5] text-white px-4 py-2 rounded-lg ml-2 hover:bg-[#597593] transition duration-300'>
                    Search
                </button>
            </search>
        </div>
         <div className='mt-8'>
            <button className='bg-[#27527f] text-white px-6 py-3 rounded-lg hover:bg-[#2f659f] transition duration-300'>
            Get Started
            </button>
        </div>
    </div>
  )
}

export default Hero