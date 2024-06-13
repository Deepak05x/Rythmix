import { albumsData, assets } from '../../assets/assets'
import { TokenContext } from '../../App'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import {Link} from 'react-router-dom'


const DisplayAlbum = () => {

  const accessToken = useContext(TokenContext)

    const [album, setAlbum] = useState([])
    const [mainImage, setMainImage] = useState([])
    const [albumContent, setAlbumContent] = useState({})
    const [artist, setArtist] = useState([])
    const [songs, setSongs] = useState([])
    

    const { id } = useParams()

    const getSingleAlbum = async()=>{
        const url = `https://api.spotify.com/v1/albums/${id}`
        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const data = response.data
        setAlbum(data.tracks.items)
        setMainImage(data.images)
        setAlbumContent(data)
        setArtist(data.artists)
        console.log(response.data.tracks.items)
        setSongs(data.tracks.items)
    }

    useEffect(()=>{
        if(accessToken) getSingleAlbum()
    },[accessToken,id])

    let count = 0
    songs.map(()=> count++)
    const arrayLength = count

    const timeConverter = (time)=>{
        const totalSeconds = Math.floor(time/1000)
        const minutes = Math.floor(totalSeconds/60)
        const seconds = totalSeconds % 60
        const paddedSeconds = seconds.toString().padStart(2, '0');
        return `${minutes}:${paddedSeconds}`;
    }



  return (
    <div className="overflow-y-auto flex flex-col gap-12 max-425:gap-8 max-375:gap-8">
      <section className='flex flex-row w-full max-2560:gap-16 max-1440:gap-16 max-1280:gap-8 max-1170:gap-12 max-1024:gap-12 max-768:gap-8 max-640:gap-8 max-425:flex-col max-425:items-center max-425:gap-8 max-375:flex-col max-375:items-center max-375:gap-4 '>
        {mainImage && mainImage[0] && mainImage[0].url && (
            <img src={mainImage[0].url} alt="" className=' max-2560:w-[250px] max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[200px] max-768:w-[180px] max-640:w-[180px] max-425:w-[200px] max-375:w-[180px]'/>
        )}
        <div className='flex flex-col items-start justify-end  max-2560:gap-8 max-1440:gap-8 max-1170:gap-4 max-1280:gap-6 max-1024:gap-8 max-768:gap-4 max-640:gap-6 max-425:items-start max-425:gap-4 max-375:items-start max-375:gap-4'>
          <h4 className='text-white max-425:hidden max-375:hidden'>Album</h4>
          <h1 className='text-white text-[25px] font-bold'>{albumContent.name}</h1>
          <div className='flex flex-row gap-4 max-640:flex-col max-640:gap-1 max-425:flex-col max-425:gap-1 max-375:flex-col max-375:gap-1'>
            {artist.map((item,index)=>(
              <p className='text-neutral-400'>&bull; {item.name}</p>
            ))}
          </div>
              <p className='text-white max-1280:text-sm max-425:hidden max-375:hidden'>{arrayLength} Songs</p>
        </div>
      </section>
      <hr className='w-full' />
      <section className='flex flex-col pb-4 gap-8 overflow-x-hidden down max-2560:gap-14 max-1440:gap-14 max-1280:gap-12  max-1170:gap-12 max-1024:gap-12 max-768:gap-12 max-640:gap-12 max-425:gap-12'>
        <div className=' grid heading-col justify-between max-2560:px-2 max-1440:px-2 max-1170:px-2 max-1024:px-2 max-1440:gap-16 max-640:hidden max-425:hidden max-375:hidden'>
          <p className='text-neutral-400 font-semibold text-[20px]'>Title</p>
          <p className='text-neutral-400 font-semibold text-[20px]'>Artist</p>
          <img src={assets.clock_icon} alt="" className='max-1440:w-[20px] max-1440:h-[20px] max-1280:w-[20px] max-1170:w-[20px] max-1024:w-[20px] max-768:w-[20px] max-640:w-[20px] max-2560:w-[20px]' />
        </div>
        {album.map((item,index)=>(
          <div className=' grid  max-2560:px-2 max-1440:px-2 w-full cursor-pointer justify-between normal-col max-1280:px-2 max-1170:px-2 max-1024:px-2 max-768:px-1 max-640:px-1 max-640:flex max-640:flex-col  max-425:flex max-425:flex-col  max-375:flex max-375:flex-col max-375:items-start' key={index}>
              <p className='text-white text-start max-1440:text-[16px]  font-light hover:underline'>{item.name}</p>
              <p className='text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline'>{item.artists[0].name}</p>
              <p className='text-neutral-400 max-425:hidden max-375:hidden max-640:hidden'>{timeConverter(item.duration_ms)}</p>
          </div>
        ))}
        
      </section>
    </div>
  )
}

export default DisplayAlbum
