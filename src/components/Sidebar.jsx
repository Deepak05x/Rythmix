import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='items-start flex-col  hidden lg:flex w-[25%]'>
        <div className="items-start justify-center flex-col bg-[#121212] w-full  py-6 px-8 gap-y-5 rounded flex">
            <div className='flex items-start justify-start gap-x-8'>
                <img src={assets.home_icon} alt="home" height={25} width={25} />
                <p className='text-white'>Home</p>
            </div>
            <div className='flex items-start justify-start gap-x-8'>
                <img src={assets.search_icon} alt="search" height={25} width={25} />
                <p className='text-white'>Search</p>
            </div>
        </div>
        <div className= 'bg-[#121212] w-full mt-2 py-6 px-3 rounded h-[70vh] overflow-y-auto'>
            <div className='w-full'>
                <div className='flex items-start flex-row justify-between  px-3'>
                    <img src={assets.stack_icon} alt="stack" width={25} height={25}/>
                    <p className='text-white flex-1 ml-8'>Your Library</p>
                    <div className='flex flex-row gap-x-4'>
                        <img src={assets.arrow_icon} alt="right" height={10} width={20} />
                        <img src={assets.plus_icon} alt="plus" height={10} width={20} />
                    </div>
                </div>
                <div className='w-full text-white rounded mt-8 py-5 px-4 gap-y-2 flex items-start justify-start flex-col bg-[#ffffff1d]'>
                    <p className='font-medium'>Create your first playlist</p>
                    <p className='text-neutral-400 font-light text-sm'>It's better to create a playlist and listen</p>
                    <button className='text-black bg-white py-1.5 px-5 font-medium rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='w-full text-white rounded mt-4 mb-10 py-5 px-4 gap-y-2 flex items-start justify-start flex-col bg-[#ffffff1d]'>
                    <p className='font-medium'>Let's find some podcast</p>
                    <p className='text-neutral-400 font-light text-sm'>We'll keep you updated on new episodes</p>
                    <button className='text-black bg-white py-1.5 px-5 font-medium rounded-full mt-4'>Create Playlist</button>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar