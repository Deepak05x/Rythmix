import React from 'react'
import Navbar from '../Navbar'
import DisplayArtist from './DisplayArtist'

const Artist = () => {
  return (
    <div className='w-[75%] bg-[#121212] rounded flex flex-col gap-12 pt-4 px-4 justify-flex-start max-1280:w-[80%] max-1024:w-full max-1024:h-[89vh] max-768:w-full max-768:h-[90vh] max-640:w-full max-425:w-full max-425:gap-8 max-375:w-full max-375:gap-8 '>
        <Navbar />
        <DisplayArtist />
    </div>
  )
}

export default Artist
