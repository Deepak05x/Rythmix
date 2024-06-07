import React from 'react'
import DisplayHome from './DisplayHome'
import Navbar from './Navbar'

const Display = () => {
  return (
    <div className='w-[75%] bg-[#121212] rounded flex flex-col gap-4 pt-4 px-4 justify-evenly '>
        <Navbar />
        <DisplayHome />
    </div>
  )
}

export default Display