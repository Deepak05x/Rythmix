import React from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {AccessContext} from "../Contexts/AcessContext";
import { CiLink } from "react-icons/ci";

const DisplayArtist = ({ setCurrentSong, audio, setToggle }) => {
   const [artist, setArtist] = useState({});
   const [tracks, setTracks] = useState([]);

   const { id } = useParams();

   const { accessToken } = useContext(AccessContext);

   const getArtist = async () => {
      try {
         const url = `https://api.spotify.com/v1/artists/${id}`;
         const response = await axios(url, {
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         });
         const data = response.data;
         setArtist(data);
      } catch (e) {
         console.log("THE SINGLE ARTIST FETCHING WAS FAILED");
         console.log(e.message);
      }
   };

   const getArtistTracks = async () => {
      try {
         const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;
         const response = await axios.get(url, {
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         });
         const data = response.data.tracks;
         setTracks(data);
      } catch (e) {
         console.log("THE TRACKS FETCHING FROM THE SINGLE ARTIST WAS FAILED");
         console.log(e.message);
      }
   };

   const handleSelection = (song) => {
      setCurrentSong({
         song: song.name,
         artist: song.artists[0].name,
         image: song.album.images[0].url,
      });
      audio.src = song.preview_url
      audio.play()
      setToggle(false)
      if(song.track.preview_url === null) alert(" \n \n No Preview URL For This Song \n \n Click The Link Icon To Visit The Song ")
   };

   const timeConverter = (time) => {
      const totalSeconds = Math.floor(time / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const paddedSeconds = seconds.toString().padStart(2, "0");

      return `${minutes}:${paddedSeconds}`;
   };

   function formatNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }

   useEffect(() => {
      getArtist();
      getArtistTracks();
   }, [accessToken]);

   return (
      <div className="overflow-y-auto flex flex-col gap-12 max-425:gap-8 max-375:gap-8">
         <section className="flex flex-row w-full max-2560:gap-16 max-1440:gap-16 max-1280:gap-8 max-1170:gap-12 max-1024:gap-12 max-768:gap-8 max-640:gap-8 max-425:flex-col max-425:items-center max-425:gap-8 max-375:flex-col max-375:items-center max-375:gap-4 ">
            {artist && artist.images && artist.images[1] && (
               <img
                  src={artist.images[1].url}
                  alt=""
                  className=" cursor-pointer rounded-[50%] max-2560:w-[230px] max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[200px] max-768:w-[180px] max-640:hidden max-425:hidden max-375:hidden"
               />
            )}
            <div className="flex flex-col items-start justify-end  max-2560:gap-10 max-1440:gap-12 max-1170:gap-6 max-1280:gap-8 max-1024:gap-8 max-768:gap-6 max-640:gap-6 max-425:items-start max-425:gap-6 max-375:items-start max-375:gap-4">
               <h4 className="text-white max-425:hidden max-375:hidden">Artist</h4>
               <div className="flex flex-col gap-1 max-640:flex-col max-640:gap-1 max-425:flex-col max-425:gap-1 max-375:flex-col max-375:gap-1">
                  <h1 className="text-white text-[40px] font-bold">{artist.name}</h1>
               </div>
               <div className="flex flex-row gap-4 items-center justify-center">
                  <p className="text-neutral-400 text-[18px]"> &bull; &nbsp; {artist && artist.followers && formatNumberWithCommas(artist.followers.total)} &nbsp; Followers</p>
               </div>
            </div>
         </section>
         <hr className="w-full" />
         <section className="flex mb-4 flex-col pb-4 gap-8 overflow-x-hidden down max-2560:gap-12 max-1440:gap-14 max-1280:gap-12  max-1170:gap-12 max-1024:gap-12 max-768:gap-12 max-640:gap-12 max-425:gap-12">
            <div className=" grid heading-col justify-between max-2560:px-2 max-1440:px-2 max-1170:px-2 max-1024:px-2 max-1440:gap-16 max-640:hidden max-425:hidden max-375:hidden">
               <p className="text-neutral-400 font-semibold text-[20px]">Title</p>
               <p className="text-neutral-400 font-semibold text-[20px]">Popularity</p>
               <img
                  src={assets.clock_icon}
                  alt=""
                  className="max-1440:w-[20px] max-1440:h-[20px] max-1280:w-[20px] max-1170:w-[20px] max-1024:w-[20px] max-768:w-[20px] max-640:w-[20px] max-2560:w-[20px]"
               />
            </div>
            {tracks.map((item, index) => (
               <div
                  key={index}
                  className=" grid  max-2560:px-2 max-1440:px-2 w-full cursor-pointer justify-between normal-col max-1280:px-2 max-1170:px-2 max-1024:px-2 max-768:px-1 max-640:px-1 max-640:flex max-640:flex-col  max-425:flex max-425:flex-col  max-375:flex max-375:flex-col max-375:items-start"
               >
                  <div className="flex flex-row gap-4 items-center">
                     <p className="text-white text-start max-1440:text-[16px] font-light hover:underline" onClick={() => handleSelection(item)}>
                        {item.name}
                     </p>
                     <a href={item.external_urls.spotify} target="_blank">
                        <p className="text-[15px] text-neutral-400 hover:underline">
                           <CiLink className="w-[20px] h-[20px] hover:scale-125" />
                        </p>
                     </a>
                  </div>
                  <p className="text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline">{item.popularity}/100</p>
                  <p className="text-neutral-400 max-425:hidden max-375:hidden max-640:hidden">{timeConverter(item.duration_ms)}</p>
               </div>
            ))}
         </section>
      </div>
   );
};

export default DisplayArtist;
