import React from "react";
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../../App";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const DisplayHome = () => {
  const accessToken = useContext(TokenContext);
  const [albums, setAlbums] = useState([]);
  const [playList, setPlayList] = useState([])
  const [artists, setArtists] = useState([])


  const getPlaylist = async()=>{
    const url = 'https://api.spotify.com/v1/browse/featured-playlists?limit=10'
    const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    })
    const data = response.data.playlists.items
    setPlayList(data)
  }


  const getAlbums = async () => {
    const url =
      "https://api.spotify.com/v1/albums?ids=3tjIKRAPBy5Qu4z8F5HmBz%2C3B61kSKTxlY36cYgzvf3cP%2C7k1b8wzjRsSTmIBuRlBrxp%2C7ARtQpvnPN2ucbmVHngLOs%2C4xkM0BwLM9H2IUcbYzpcBI%2C5EYKrEDnKhhcNxGedaRQeK%2C7asdrrGPiGUgv50OATAorX%2C0vmYAygGWZZ4pO6L3xC2kX%2C1OojCidx0eoPKch2M0Kz31%2C2R2YbAP031cY3CpJN78X7e";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = response.data.albums;
    setAlbums(data);
  };

  const getArtist = async()=>{
      const url ='https://api.spotify.com/v1/artists?ids=0Y5tJX1MQlPlqiwlOH1tJY%2C5VVN3xZw1i2qihfITZlvCZ%2C1mYsTxnqsietFxj1OgoGbG%2C4zCH9qm4R2DADamUHMCa6O%2C5cB4d4jPYjMT326sjihQ4m%2C5yoqPvofOHrBc3Z6VZyTsj%2C6VuMaDnrHyPL1p4EHjYLi7'
      const response = await axios.get(url,{
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      })
      const data = response.data.artists
      setArtists(data)
  }

 
 
  useEffect(()=>{
    getAlbums()
    getArtist()
    getPlaylist()
  },[accessToken])
  

 

  return (
    <div className="flex flex-col w-full h-[70vh] gap-12 overflow-y-auto down max-1280:pr-0">
      <div className="flex flex-row w-full gap-8 max-1280:gap-4 max-1024:gap-4 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2">
        <button className="bg-white py-1 px-3 rounded-full">All</button>
        <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white">
          Music
        </button>
        <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white">
          Podcasts
        </button>
        <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex">
          Library
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-white font-semibold text-2xl">Featured Albums</h1>
        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left ">
          {albums.map((item, index) => (
            <Link to={`/albums/${item.id}`} className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]" key={index}  >
              <img src={item.images[0].url} alt="" width={200} height={200} className='rounded-[10px]'/>
              <h4 className="text-white truncate-sm pl-2">{item.name}</h4>
              <p className="text-neutral-400 text-sm w-full truncate pl-2">
                {item.label}
              </p>
            </Link>
          ))}
        </section>
        <h1 className="text-white font-semibold text-2xl mt-4">
          Top Playlists
        </h1>
        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left">
          {playList.map((item,index)=>(
            <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]" key={index}>
              <img src={item.images[0].url} alt="" width={200} height={200} className='rounded-[10px]'/>
              <h4 className="text-white truncate-sm pl-2">{item.name}</h4>
              <p className="text-neutral-400 text-sm w-full truncate pl-2">
                {item.description}
              </p>
            </div>
          ))}
        </section>
        <h1 className="text-white font-semibold text-2xl mt-4">Top Artists</h1>
        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left">
          {artists.map((item,index)=>(
            <div className="flex flex-col gap-2 w-[200px] shrink-0 items-center max-1280:w-[170px]" key={index}>
              <img
                src={item.images[1].url}
                alt=""
                className="rounded-full"
              />
              <h4 className="text-white">{item.name}</h4>
            </div>
          ))}
          
        </section>
      </div>
    </div>
  );
};

export default DisplayHome;
