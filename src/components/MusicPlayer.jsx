import React from 'react'
import { assets } from '../assets/assets'

const MusicPlayer = () => {
  return (
    <div className='flex items-center justify-between w-full  h-full  bg-black py-4 px-2 flex-row'>
        <div className='lg:flex hidden flex-row gap-x-3 w-full'>
            <img src={assets.img1} alt="" width={50} height={40} />
            <div className='text-white flex items-start justify-center flex-col gap-y-2'>
                <p>Sweater Weather</p>
                <p className='text-neutral-400 text-sm'>Neighbourhood</p>
            </div>
        </div>
        <div className='flex flex-col items-center w-full gap-2'>
            <div className='flex flex-row items-center gap-x-4'>
                <img src={assets.shuffle_icon} alt="" width={17} height={17} />
                <img src={assets.prev_icon} alt="" width={17} height={17} />
                <img src={assets.play_icon} alt="" width={17} height={17} />
                <img src={assets.next_icon} alt="" width={17} height={17} />
                <img src={assets.loop_icon} alt="" width={17} height={17} />
            </div>
            <div className='text-white flex flex-row items-center justify-center gap-4 text-sm font-neutral'>
                <p>0:00</p>
                <div className='w-[50vw] h-[3px] max-w-[400px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>3:20</p>
            </div>
        </div>
        <div className='w-full flex flex-row items-center justify-end gap-3 opacity-70'>
            <img src={assets.plays_icon} alt="" width={17} height={17} />
            <img src={assets.mic_icon} alt="" width={17} height={17} />
            <img src={assets.queue_icon} alt="" width={17} height={17} />
            <img src={assets.speaker_icon} alt="" width={17} height={17} />
            <img src={assets.volume_icon} alt="" width={17} height={17} />
            <div className='w-20 h-[3px] bg-slate-300 rounded'>
            </div>
            <img src={assets.mini_player_icon} alt="" width={17} height={17} />
            <img src={assets.zoom_icon} alt="" width={17} height={17} />
        </div>
    </div>
  )
}

export default MusicPlayer