import { assets } from '../../assets/assets'


const DisplayAlbum = () => {
  return (
    <div className="overflow-y-auto flex flex-col gap-12">
      <section className='flex flex-row w-full max-1440:gap-12'>
        <img src={assets.img1} alt="" className='max-1440:w-[230px] max-1440:h-[230px]'/>
        <div className='flex flex-col items-start justify-end max-1440:gap-2'>
          <h4 className='text-white'>Album</h4>
          <h1 className='text-white text-[80px]'>Daily Mix</h1>
          <p className='text-neutral-400'>Travis scott, Alexander</p>
          <p className='text-white'>50 Songs</p>
        </div>
      </section>
      <hr className='w-full' />
      <section className='flex flex-col gap-8'>
        <div className=' grid heading-col justify-between max-1440:px-4 max-1440:gap-16'>
          <p className='text-neutral-400'>Title</p>
          <p className='text-neutral-400'>Artist</p>
          <img src={assets.clock_icon} alt="" className='max-1440:w-[20px] max-1440:h-[20px]' />
        </div>
        <div className=' grid max-1440:px-4 w-full justify-between normal-col max-1440:gap-16 '>
          <div className='flex flex-row gap-4'>
            <img src={assets.img1} alt="" className='w-[25px] h-[25px] rounded-full' />
            <p className='text-white text-start max-1440:text-[18px] truncate-sm'>Sweater Weather</p>
          </div> 
            <p className='text-neutral-400 max-1440:text-[15px]'>Travis Scott</p>
            <p className='text-neutral-400 '>2:35</p>
        </div>
      </section>
    </div>
  )
}

export default DisplayAlbum
