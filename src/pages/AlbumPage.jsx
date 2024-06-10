import React from 'react'
import axios from 'axios'
import { TokenContext } from '../App'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import MusicPlayer from '../components/MusicPlayer'
import Display from '../components/HomePage/Display'
import DisplayAlbum from '../components/AlbumPage/DisplayAlbum'
import Album from '../components/AlbumPage/Album'

const AlbumPage = () => {

    const accessToken = useContext(TokenContext)

    const [album, setAlbum] = useState([])

    const { id } = useParams()

    const getSingleAlbum = async()=>{
        const url = `https://api.spotify.com/v1/albums/${id}`
        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const data = response.data
        setAlbum(data)
        // console.log(response.data.tracks.items)
    }

    useEffect(()=>{
        if(accessToken) getSingleAlbum()
    },[accessToken,id])

  return (
    <main className='px-2 py-2 flex flex-col'>
        <div className='flex flex-row gap-2 max-1440:h-[87.5vh] max-1280:h-[88vh] max-1170:h-[88vh] exact-1024:h-[88vh] max-1024:h-[88vh] max-768:h-[90vh] max-640:h-[90vh] max-425:h-[90vh] max-375:h-[89vh] max-2000:h-[90vh]'> 
            <Sidebar /> 
            <Album />
        </div> 
        <div className='max-1440:h-[10vh] max-1280:h-[9vh] max-1170:h-[9vh] exact-1024:h-[9vh] max-1024:h-[9vh] max-768:h-[8vh] max-640:h-[8vh] max-425:h-[8vh] max-375:h-[9vh] max-2000:h-[8vh]'>
            <MusicPlayer />
        </div>
    </main>
    
  )
}

export default AlbumPage
