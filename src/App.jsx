import React from 'react'
import Display from './components/Display'
import MusicPlayer from './components/MusicPlayer'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='px-2 pt-2'>
      <div className='flex flex-row gap-2'> 
        <Sidebar />
        <Display />
      </div> 
      <div className=''>
        <MusicPlayer />
      </div>
      

    </div>
  )
}

export default App