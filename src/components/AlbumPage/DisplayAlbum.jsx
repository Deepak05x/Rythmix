import { assets } from '../../assets/assets'
import { TokenContext } from '../../App'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { data } from 'autoprefixer'


const DisplayAlbum = () => {

  const accessToken = useContext(TokenContext)

    const [album, setAlbum] = useState([])
    const [mainImage, setMainImage] = useState([])

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
        console.log(response.data)
    }

    useEffect(()=>{
        if(accessToken) getSingleAlbum()
    },[accessToken,id])

  return (
    <div className="overflow-y-auto flex flex-col gap-12 max-425:gap-8 max-375:gap-8">
      <section className='flex flex-row w-full max-2000:gap-16 max-1440:gap-12 max-1280:gap-8 max-1170:gap-8 max-1024:gap-12 max-768:gap-8 max-640:gap-8 max-425:flex-col max-425:items-center max-425:gap-8 max-375:flex-col max-375:items-center max-375:gap-4 '>
        {mainImage && mainImage[0] && mainImage[0].url && (
            <img src={mainImage[0].url} alt="" className='max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[200px] max-768:w-[180px] max-640:w-[180px] max-425:w-[200px] max-375:w-[180px]'/>
        )}
        <div className='flex flex-col items-start justify-end  max-2000:gap-4 max-1440:gap-2 max-1170:gap-2 max-1024:gap-2 max-640:gap-2 max-425:items-center max-425:gap-4 max-375:items-center'>
          <h4 className='text-white max-425:hidden max-375:hidden'>Album</h4>
          <h1 className='text-white text-[80px] max-1280:text-[60px] max-1170:text-[40px] max-768:text-[60px] max-640:text-[40px] max-425:text-[40px] max-375:text-[40px]'>Daily Mix</h1>
          <p className='text-neutral-400 '>Travis scott, Alexander</p>
          <p className='text-white max-1280:text-sm max-425:hidden max-375:hidden'>50 Songs</p>
        </div>
      </section>
      <hr className='w-full' />
      <section className='flex flex-col  gap-8 overflow-x-hidden down max-2000:gap-14 max-1440:gap-14 max-1280:gap-12  max-1170:gap-12 max-1024:gap-12 max-768:gap-12 max-640:gap-12 max-425:gap-12'>
        <div className=' grid heading-col justify-between max-1440:px-4 max-1440:gap-16 max-640:hidden max-425:hidden max-375:hidden'>
          <p className='text-neutral-400'>Title</p>
          <p className='text-neutral-400'>Artist</p>
          <img src={assets.clock_icon} alt="" className='max-1440:w-[20px] max-1440:h-[20px] max-1280:w-[20px] max-1170:w-[20px] max-1024:w-[20px] max-768:w-[20px] max-640:w-[20px] max-2000:w-[20px]' />
        </div>
        {album.map((item,index)=>(
            <div className=' grid max-1440:px-4 w-full cursor-pointer justify-between normal-col max-1280:px-1 max-1170:px-2 max-1024:px-2 max-768:px-2 max-640:px-2 max-640:flex max-2000:px-2 max-425:flex max-375:flex max-375:flex-col max-375:items-start' key={index}>
            <div className='flex flex-row gap-4'>
              <p className='text-white text-start max-1440:text-[18px] font-light truncate-sm max-2000:text-[23px]'>{item.name}</p>
            </div> 
              <p className='text-neutral-400 max-1440:text-[15px] max-2000:text-[20px] max-375:ml-12 truncate-sm'>{item.artists[0].name}</p>
              <p className='text-neutral-400 max-425:hidden max-375:hidden '>2:35</p>
          </div>
        ))}
        
      </section>
    </div>
  )
}

export default DisplayAlbum
