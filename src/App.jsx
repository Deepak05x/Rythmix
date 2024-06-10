import React from 'react'
import { Routes, Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArtistPage from './pages/ArtistPage'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
        <Routes>
          <Route path='/artist' element={<ArtistPage />}/>
        </Routes>
    </>
  )
}

export default App