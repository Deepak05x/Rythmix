import React from 'react'
import { assets } from '../assets/assets'

const DisplayHome = () => {
  return (
    <div className='flex flex-col w-full h-[70vh] gap-12 overflow-y-auto down'>
        <div className='flex flex-row w-full gap-8'>
            <button className='bg-white py-1 px-5 rounded-full'>All</button>
            <button className='bg-[#ffffff1d] py-1 px-5 rounded-full text-white'>Music</button>
            <button className='bg-[#ffffff1d] py-1 px-5 rounded-full text-white'>Podcasts</button>
        </div>
        <div className='flex flex-col gap-10'>
          <h1 className='text-white font-semibold text-2xl'>Featured Albums</h1>
          <section className='flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left'>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
          </section>
          <h1 className='text-white font-semibold text-2xl mt-4'>Top Playlists</h1>
          <section className='flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left'>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0'>
                  <img src={assets.img1} alt="" width={200} height={200} />
                  <h4 className='text-white'>Top 50 songs</h4>
                  <p className='text-neutral-400 text-sm w-full truncate'>Your weekly update of the most played track is the best</p>
              </div>
          </section>
          <h1 className='text-white font-semibold text-2xl mt-4'>Top Artists</h1>
          <section className='flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left'>
              <div className='flex flex-col gap-2 w-[200px] shrink-0 items-center'>
                  <img src={assets.img1} alt="" width={200} height={200} className='rounded-full' />
                  <h4 className='text-white'>Travis Scott</h4>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0 items-center'>
                  <img src={assets.img1} alt="" width={200} height={200} className='rounded-full' />
                  <h4 className='text-white'>Travis Scott</h4>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0 items-center'>
                  <img src={assets.img1} alt="" width={200} height={200} className='rounded-full' />
                  <h4 className='text-white'>Travis Scott</h4>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0 items-center'>
                  <img src={assets.img1} alt="" width={200} height={200} className='rounded-full' />
                  <h4 className='text-white'>Travis Scott</h4>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0 items-center'>
                  <img src={assets.img1} alt="" width={200} height={200} className='rounded-full' />
                  <h4 className='text-white'>Travis Scott</h4>
              </div>
              <div className='flex flex-col gap-2 w-[200px] shrink-0 items-center'>
                  <img src={assets.img1} alt="" width={200} height={200} className='rounded-full' />
                  <h4 className='text-white'>Travis Scott</h4>
              </div>
          </section>
        </div>

        

    </div>
  )
}

export default DisplayHome