import React from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { TokenContext } from '../../App'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

const DisplayArtist = () => {

    const [artist, setArtist] = useState({})

    const {id} = useParams()

    const accessToken = useContext(TokenContext)

    const getArtist = async()=>{
        const url = `https://api.spotify.com/v1/artists/${id}`
        const response = await axios(url,{
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        })
        const data = response.data
        setArtist(data)
        console.log(response.data)
    }

    const followerConverter = (count)=>{
        if(count > 1000000) return `${Math.floor(count/1000000)}M`
        else if(count > 10000) return `${Math.floor(count/10000)}K`
    }

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

    useEffect(()=>{
        getArtist()
    },[])
 
  return (
    <div className="overflow-y-auto flex flex-col gap-12 max-425:gap-8 max-375:gap-8">
        <section className="flex flex-row w-full max-2560:gap-16 max-1440:gap-16 max-1280:gap-8 max-1170:gap-12 max-1024:gap-12 max-768:gap-8 max-640:gap-8 max-425:flex-col max-425:items-center max-425:gap-8 max-375:flex-col max-375:items-center max-375:gap-4 ">
            {artist && artist.images && artist.images[1] && (
                    <img src={artist.images[1].url} alt="" className=' rounded-[50%] max-2560:w-[230px] max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[200px] max-768:w-[180px] max-640:w-[180px] max-425:w-[200px] max-375:w-[180px]'/>
            )}
            <div className="flex flex-col items-start justify-end  max-2560:gap-10 max-1440:gap-12 max-1170:gap-6 max-1280:gap-8 max-1024:gap-8 max-768:gap-6 max-640:gap-6 max-425:items-start max-425:gap-6 max-375:items-start max-375:gap-4">
            <h4 className="text-white max-425:hidden max-375:hidden">Artist</h4>
            <div className="flex flex-col gap-1 max-640:flex-col max-640:gap-1 max-425:flex-col max-425:gap-1 max-375:flex-col max-375:gap-1">
                <h1 className="text-white text-[40px] font-bold">{artist.name}</h1>
            </div> 
            <div className="flex flex-row gap-4 items-center justify-center">
                <p className="text-neutral-400 text-[18px]"> &bull; &nbsp; { artist && artist.followers && formatNumberWithCommas(artist.followers.total)} &nbsp; Followers</p>
            </div>
            </div> 
      </section>
      <hr className='w-full' />
      <section className='flex flex-col  gap-8 overflow-x-hidden down max-2560:gap-12 max-1440:gap-14 max-1280:gap-12  max-1170:gap-12 max-1024:gap-12 max-768:gap-12 max-640:gap-12 max-425:gap-12'>
        <div className=' max-2560:px-2 max-1440:px-2 max-1170:px-2 max-1024:px-2 max-1440:gap-16 max-640:hidden max-425:hidden max-375:hidden'>
          <h1 className='text-[25px] text-white'>Popular</h1>
        </div>
        <div className=' grid max-2560:px-2 max-1440:px-2 w-full cursor-pointer justify-between normal-col max-1280:px-2 max-1170:px-2 max-1024:px-2 max-768:px-1 max-640:px-1 max-640:flex max-640:flex-col  max-425:flex max-425:flex-col  max-375:flex max-375:flex-col max-375:items-start'>
            <div className='flex flex-row gap-4'>
              <p className='text-white text-start max-1440:text-[16px] font-light hover:underline'>Feein</p>
            </div> 
              <p className='text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline'>5,00,00,000</p>
              <p className='text-neutral-400 max-425:hidden max-375:hidden max-640:hidden'>3:25</p>
        </div>
      </section>
      <p className='text-neutral-400 hover:text-white px-2'>See more</p>
    </div>
  )
}

export default DisplayArtist
