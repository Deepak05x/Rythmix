import React from 'react'
import MusicPlayer from './components/MusicPlayer'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='px-1 py-2'>
      <Sidebar />
      <MusicPlayer />
    </div>
  )
}

export default App