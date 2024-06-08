import React from 'react'
import Display from './components/Display'
import MusicPlayer from './components/MusicPlayer'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='px-2 py-2 max-1440:h-[100vh]'>
      <div className='flex flex-row gap-2 max-1440:h-[87.5vh] max-1280:h-[88vh] max-1170:h-[88vh] exact-1024:h-[88vh] max-1024:h-[88vh]'> 
        <Sidebar /> 
        <Display />
      </div> 
      <div className='max-1440:h-[10vh] max-1280:h-[9vh] max-1170:h-[9vh] exact-1024:h-[9vh] max-1024:h-[9vh]'>
        <MusicPlayer />
      </div>
    </div>
  )
}

export default App