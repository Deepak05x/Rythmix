import { assets } from '../../assets/assets'


const DisplayAlbum = () => {
  return (
    <div className="overflow-y-auto">
      <section className='flex flex-row w-full max-1440:gap-12'>
        <img src={assets.img1} alt="" className='max-1440:w-[250px]'/>
        <div className='flex flex-col items-start max-1440:gap-8'>
          <h4>Album</h4>
          <h1 className='text-white'>Daily Mix</h1>
          <p>Travis scott, Alexander</p>
          <p>50 Songs</p>
        </div>
      </section>
      

    </div>
  )
}

export default DisplayAlbum
