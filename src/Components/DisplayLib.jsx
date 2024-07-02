import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';
import { useState } from 'react';

const DisplayLib = ({ likedSongs, setCurrentSong, audio, setCurrentType, setIndex, setToggle, setLikedSongs, getSongUrl, getArtistName, getSongName, getSongImage }) => {
    const [loading, setLoading] = useState(true);

    const handleSelection = (song, index) => {
        setCurrentSong({
            song: getSongName(song),
            artist: getArtistName(song),
            image: getSongImage(song),
        });
        audio.src = getSongUrl(song);
        audio.play();
        setToggle(false);
        setIndex(index);
        setCurrentType('fav');
        if (audio.src === null) alert(' \n \n No Preview URL For This Song \n \n Click The Link Icon To Visit The Song ');
    };

    const handleLike = (item) => {
        const songId = item.id || item.track?.id;
        const isLiked = likedSongs.some((song) => song.id === songId || song.track?.id === songId);
        if (isLiked) {
            setLikedSongs(likedSongs.filter((song) => song.id !== songId && song.track?.id !== songId));
        } else {
            setLikedSongs([...likedSongs, item]);
        }
    };

    const getArtistId = (item) => {
        if (item.artists) {
            return item.artists[0].id;
        } else if (item.track && item.track.artists) {
            return item.track.artists[0].id;
        }
        return null;
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col w-full  h-[100%] gap-16 overflow-y-auto down overflow-x-hidden my-4 pt-4 px-4">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    <ClipLoader color={'white'} loading={true} size={60} />
                </div>
            ) : (
                <>
                    <div className="px-4">
                        <Navbar />
                    </div>
                    <div className="flex flex-row w-full gap-8 max-1024:gap-6 max-768:gap-6 max-640:gap-3 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2 px-4">
                        <Link to={'/'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 text-white rounded-full hover:scale-105 transition-all ease-in">All</button>
                        </Link>
                        <Link to={'/music'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Music</button>
                        </Link>
                        <Link to={'/podcast'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Podcasts</button>
                        </Link>
                        <Link to={'/library'}>
                            <button className="bg-white py-1 px-3 rounded-full hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                                Library
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-10 mb-4 px-4 ">
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-row gap-8 px-2">
                                <img src={assets.stack_icon} alt="" className="w-[30px] h-[30px]" />
                                <h1 className="text-white font-semibold text-2xl">Favourites</h1>
                            </div>

                            <hr className="w-full" />
                            <div className="w-full h-full gap-8 flex flex-col">
                                <div className="w-full h-full flex flex-col justify-center gap-2 px-5 items-start">
                                    <Link to={`/artist/0g0ZYLiNYI4kMg8MX76bkN`}>
                                        <h1 className="text-white font-semibold cursor-pointer hover:underline">After Dark x Sweater Weather</h1>
                                    </Link>

                                    <Link to={`/artist/0g0ZYLiNYI4kMg8MX76bkN`}>
                                        <p className="text-neutral-400 cursor-pointer hover:underline">mikeeysmind</p>
                                    </Link>
                                    <div className="text-neutral-400 ">
                                        <p className="text-neutral-400 cursor-pointer hover:underline text-sm">( Creator's Favourite )</p>
                                    </div>
                                </div>
                                <hr className="w-[90%] text-neutral-400" />
                            </div>
                        </div>

                        <section className="flex flex-col items-start   gap-12 overflow-x-auto  whitespace-nowrap left pb-10  ">
                            {likedSongs.map((item, index) => (
                                <div className="w-full h-full gap-8 flex flex-col overflow-x-hidden" key={index}>
                                    <div className="w-full h-full flex flex-col justify-center gap-2 px-4 items-start">
                                        <h1 className="text-white font-semibold cursor-pointer hover:underline" onClick={() => handleSelection(item, index)}>
                                            {getSongName(item)}
                                        </h1>

                                        <Link to={`/artist/${getArtistId(item)}}`}>
                                            <p className="text-neutral-400 cursor-pointer hover:underline">{getArtistName(item)}</p>
                                        </Link>
                                        <div className="text-neutral-400 cursor-pointer hover:scale-125 transition-all ease-in " onClick={() => handleLike(item)}>
                                            {likedSongs.some((song) => song.id === item.id) ? <FaHeart className="w-[20px] h-[20px]" /> : <FaRegHeart className="w-[20px] h-[20px] " />}
                                        </div>
                                    </div>
                                    <hr className="w-[90%] text-neutral-400" />
                                </div>
                            ))}
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default DisplayLib;
