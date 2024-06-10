import React from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { useContext } from "react";
import { TokenContext } from "../App";
import { useState } from "react";
import { useEffect } from "react";

const DisplayHome = () => {
  const accessToken = useContext(TokenContext);
  const [albums, setAlbums] = useState([]);

  const getSingleAlbum = async () => {
    const url =
      "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = response.data.albums;
    setAlbums(data);
    console.log(response.data.albums);
  };

  useEffect(() => {
    if (accessToken) getSingleAlbum();
  }, [accessToken]);

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
        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left">
          {albums.map((item, index) => (
            <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]" key={index}>
              <img src={item.images[0].url} alt="" width={200} height={200} className='rounded-[10px]'/>
              <h4 className="text-white truncate-sm pl-2">{item.name}</h4>
              <p className="text-neutral-400 text-sm w-full truncate pl-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
                consectetur? Distinctio voluptatibus voluptates quaerat? Fugiat
                nemo pariatur ad perspiciatis harum, voluptatibus quia, quaerat
                doloremque corporis repudiandae placeat, debitis totam earum.
              </p>
            </div>
          ))}
        </section>
        <h1 className="text-white font-semibold text-2xl mt-4">
          Top Playlists
        </h1>
        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left">
          <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]">
            <img src={assets.img1} alt="" width={200} height={200} />
            <h4 className="text-white">Top 50 songs</h4>
            <p className="text-neutral-400 text-sm w-full truncate">
              Your weekly update of the most played track is the best
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]">
            <img src={assets.img1} alt="" width={200} height={200} />
            <h4 className="text-white">Top 50 songs</h4>
            <p className="text-neutral-400 text-sm w-full truncate">
              Your weekly update of the most played track is the best
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]">
            <img src={assets.img1} alt="" width={200} height={200} />
            <h4 className="text-white">Top 50 songs</h4>
            <p className="text-neutral-400 text-sm w-full truncate">
              Your weekly update of the most played track is the best
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]">
            <img src={assets.img1} alt="" width={200} height={200} />
            <h4 className="text-white">Top 50 songs</h4>
            <p className="text-neutral-400 text-sm w-full truncate">
              Your weekly update of the most played track is the best
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]">
            <img src={assets.img1} alt="" width={200} height={200} />
            <h4 className="text-white">Top 50 songs</h4>
            <p className="text-neutral-400 text-sm w-full truncate">
              Your weekly update of the most played track is the best
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]">
            <img src={assets.img1} alt="" width={200} height={200} />
            <h4 className="text-white">Top 50 songs</h4>
            <p className="text-neutral-400 text-sm w-full truncate">
              Your weekly update of the most played track is the best
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 max-1280:w-[170px]">
            <img src={assets.img1} alt="" width={200} height={200} />
            <h4 className="text-white">Top 50 songs</h4>
            <p className="text-neutral-400 text-sm w-full truncate">
              Your weekly update of the most played track is the best
            </p>
          </div>
        </section>
        <h1 className="text-white font-semibold text-2xl mt-4">Top Artists</h1>
        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left">
          <div className="flex flex-col gap-2 w-[200px] shrink-0 items-center max-1280:w-[170px]">
            <img
              src={assets.img1}
              alt=""
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="text-white">Travis Scott</h4>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 items-center max-1280:w-[170px]">
            <img
              src={assets.img1}
              alt=""
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="text-white">Travis Scott</h4>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 items-center max-1280:w-[170px]">
            <img
              src={assets.img1}
              alt=""
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="text-white">Travis Scott</h4>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 items-center max-1280:w-[170px]">
            <img
              src={assets.img1}
              alt=""
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="text-white">Travis Scott</h4>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 items-center max-1280:w-[170px]">
            <img
              src={assets.img1}
              alt=""
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="text-white">Travis Scott</h4>
          </div>
          <div className="flex flex-col gap-2 w-[200px] shrink-0 items-center max-1280:w-[170px]">
            <img
              src={assets.img1}
              alt=""
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="text-white">Travis Scott</h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisplayHome;
