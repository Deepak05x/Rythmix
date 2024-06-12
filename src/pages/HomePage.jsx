import React from 'react'
import Display from '../components/HomePage/Display'
import MusicPlayer from '../components/MusicPlayer'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
  return (
    <div className='px-2 py-2'>
        <div className='flex flex-row gap-2 max-2560:h-[90vh] max-1440:h-[87.5vh] max-1280:h-[88vh] max-1170:h-[88vh] exact-1024:h-[88vh] max-1024:h-[88vh] max-768:h-[90vh] max-640:h-[90vh] max-425:h-[90vh] max-375:h-[89vh] max-2000:h-[90vh]'> 
            <Sidebar /> 
            <Display />
        </div> 
        <div className=' max-2560:h-[8vh] max-1440:h-[10vh] max-1280:h-[9vh] max-1170:h-[9vh] exact-1024:h-[9vh] max-1024:h-[9vh] max-768:h-[8vh] max-640:h-[8vh] max-425:h-[8vh] max-375:h-[9vh] max-2000:h-[8vh]'>
            <MusicPlayer />
        </div>
    </div>
  )
}

export default HomePage
