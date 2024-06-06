import React from 'react'
import { assets } from '../assets/assets'

const DisplayHome = () => {
  return (
    <div className='flex flex-col w-full h-full gap-5'>
        <div className='flex flex-row w-full gap-8'>
            <button className='bg-white py-1 px-5 rounded-full'>All</button>
            <button className='bg-[#ffffff1d] py-1 px-5 rounded-full text-white'>Music</button>
            <button className='bg-[#ffffff1d] py-1 px-5 rounded-full text-white'>Podcasts</button>
        </div>
        <h1 className='text-white font-semibold text-2xl'>Featured Albums</h1>
        <div className='flex flex-row items-start pl-4'>
            <div className='flex flex-col gap-2 w-[15%]'>
                <img src={assets.img1} alt="" width={150} height={150} className=''/>
                <h4 className='text-white'>Top 50 songs</h4>
                <p className='text-white text-sm w-full'>Your weekly update of the most played track is the best</p>
            </div>
        </div>
    </div>
  )
}

export default DisplayHome