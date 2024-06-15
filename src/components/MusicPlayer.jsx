import React from 'react'
import { assets } from '../assets/assets'


const MusicPlayer = ({currentSong}) => {
  return (
    <div className='flex items-center justify-between w-full h-full  bg-[#121212] py-4 px-2 flex-row mt-1 max-1024:mt-2 max-768:mt-4 max-768:justify-between max-640:mt-0.5'>
        <div className='flex flex-row gap-x-3 w-full max-1440:items-center max-1170:items-center max-1280:items-center max-1024:items-center max-768:w-[10%] max-640:w-[10%] max-375:hidden'>
            <img src={currentSong.image} alt="" width={50} height={40} className=' rounded-full max-1440:h-[50px] max-1440:w-[50px] max-1170:w-[50px] max-1170:h-[50px] max-1280:w-[50px] max-1280:h-[50px] max-1024:w-[50px] max-1024:h-[50px] max-1024:rounded-full max-768:w-[45px] max-768:h-[45px] max-768:rounded-full max-640:rounded-full max-640:w-[50px] max-425:w-[50px] max-425:rounded-full'/>
            <div className='text-white flex items-start justify-center flex-col gap-y-1 max-768:hidden max-640:hidden max-425:hidden exact-1024:gap-1 max-1024:gap-1'>
                <p className='max-1280:text-[12px] max-1170:text-[12px] max-1024:text-[12px] max-1440:text-[12px]'>{currentSong.song}</p>
                <p className='text-neutral-400 max-1280:text-[12px] max-1440:text-[12px] max-1024:text-[12px] max-1170:text-[12px]'>{currentSong.artist}</p>
            </div>
        </div>
        <div className='flex flex-col items-center w-full gap-2 max-1024:mr-8 max-1024:gap-2 max-1024:mt-2 max-640:w-[90%] max-768:mt-1'>
            <div className='flex flex-row items-center gap-x-4 '>
                <img src={assets.shuffle_icon} alt="" width={17} height={17} className='max-1024:w-[15px] max-768:w-[14px] max-375:w-[14px] max-425:w-[14px] hover:opacity-50 transition-all ease-in' />
                <img src={assets.prev_icon} alt="" width={17} height={17} className='max-1024:w-[15px] max-768:w-[14px] max-425:w-[14px] max-375:w-[14px] hover:opacity-50 transition-all ease-in'/>
                <img src={assets.play_icon} alt="" width={17} height={17} className='max-1024:w-[15px] max-768:w-[14px]  max-425:w-[14px] max-375:w-[14px]  hover:opacity-50 transition-all ease-in'/>
                <img src={assets.next_icon} alt="" width={17} height={17} className='max-1024:w-[15px] max-768:w-[14px] max-425:w-[14px]  max-375:w-[14px]  hover:opacity-50 transition-all ease-in'/>
                <img src={assets.loop_icon} alt="" width={17} height={17} className='max-1024:w-[15px] max-768:w-[14px] max-425:w-[14px] max-375:w-[14px] hover:opacity-50 transition-all ease-in'/>
            </div>
            {/* <div className='text-white flex flex-row items-center justify-center gap-4 text-sm font-neutral'>
                <p className='max-1024:text-[12px]'>0:00</p>
                <div className='w-[50vw] h-[3px] max-w-[400px] bg-gray-300 rounded-full cursor-pointer max-1170:max-w-[300px]  max-1024:max-w-[300px] max-768:w-[300px] exact-425:max-w-[180px]'>
                    <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p className='max-1024:text-[12px]'>3:20</p>
            </div> */}
        </div>
        <div className='w-full flex flex-row items-center justify-end gap-3 opacity-70 max-1024:hidden max-768:hidden max-640:hidden max-425:hidden max-375:hidden'>
            <img src={assets.plays_icon} alt="" width={17} height={17} className=' max-1170:w-[15px] max-1170:h-[15px] max-1024:h-[14px] max-1024:w-[14px] '/>
            <img src={assets.mic_icon} alt="" width={17} height={17} className=' max-1170:w-[15px] max-1170:h-[15px] max-1024:h-[14px] max-1024:w-[14px]'/>
            <img src={assets.queue_icon} alt="" width={17} height={17} className=' max-1170:w-[15px] max-1170:h-[15px] max-1024:h-[14px] max-1024:w-[14px]'/>
            <img src={assets.speaker_icon} alt="" width={17} height={17} className=' max-1170:w-[15px] max-1170:h-[15px] max-1024:h-[14px] max-1024:w-[14px]'/>
            <img src={assets.volume_icon} alt="" width={17} height={17} className='max-1170:w-[15px] max-1170:h-[15px] max-1024:h-[14px] max-1024:w-[14px]'/>
            <div className='w-20 h-[3px] bg-slate-300 rounded max-1170:w-15 max-1024:w-16'>
            </div>
            <img src={assets.mini_player_icon} alt="" width={17} height={17} className=' max-1170:w-[15px] max-1170:h-[15px] max-1024:h-[14px] max-1024:w-[14px]'/>
            <img src={assets.zoom_icon} alt="" width={17} height={17} className=' max-1170:w-[15px] max-1170:h-[15px] max-1024:h-[14px] max-1024:w-[14px]'/>
        </div>
        <div className='hidden max-768:flex max-768:w-[25px] max-640:flex exact-425:w-[20px]'><img src={assets.plus_icon} alt="" width={30} height={30} /></div>
    </div>
  )
}

export default MusicPlayer