import React from 'react'
import axios from 'axios'
import { TokenContext } from '../App'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Sidebar from '../components/Sidebar'
import MusicPlayer from '../components/MusicPlayer'

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
    <main className='px-2 py-2'>
        <section className=''>
            <Sidebar />
        </section>
        <section>
            <MusicPlayer />
        </section>
    </main>
    
  )
}

export default AlbumPage
