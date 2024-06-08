import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex flex-row items-start justify-between w-full'>
        <div className='flex flex-row items-start justify-start gap-4 w-full'>
            <img src={assets.arrow_left} alt="left" width={35} height={35} className='border-black bg-black rounded-full p-2'/>
            <img src={assets.arrow_right} alt="left" width={35} height={35} className='border-black bg-black rounded-full p-2'/>
        </div>
        <div className='w-full flex flex-row items-center justify-end gap-8 max-768:gap-5'>
            <button className='bg-white text-black py-1.5 px-4 rounded-full font-medium max-768:px-[10px] max-768:font-medium max-768:text-sm'>Explore Rythmix</button>
            <button className='bg-black text-white py-1.5 px-4 rounded-full font-medium max-768:text-sm'>Install App</button>
            <p className='bg-purple-500 py-2 px-4 rounded-full font-medium text-base'>D</p>
        </div>
    </div>
  )
}

export default Navbar