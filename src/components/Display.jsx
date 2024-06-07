import React from 'react'
import DisplayHome from './DisplayHome'
import Navbar from './Navbar'

const Display = () => {
  return (
    <div className='w-3/4 bg-[#121212] rounded flex flex-col gap-4 pt-4 px-4 justify-evenly max-1280:w-[80%] max-1024:w-full'>
        <Navbar />
        <DisplayHome />
    </div>
  )
}

export default Display