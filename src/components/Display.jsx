import React from 'react'
import DisplayHome from './DisplayHome'
import Navbar from './Navbar'

const Display = () => {
  return (
    <div className='w-[75%] bg-[#121212] rounded flex flex-col gap-4 pt-4 px-4 justify-evenly max-1280:w-[80%] max-1024:w-full max-1024:h-[89vh] max-768:w-full max-768:h-[90vh]'>
        <Navbar />
        <DisplayHome />
    </div>
  )
}

export default Display