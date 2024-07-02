import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Sidebar = ({ likedSongs, setCurrentSong, audio, setCurrentType, setIndex, setToggle, setLikedSongs, getSongUrl, getArtistName, getSongName, getSongImage }) => {
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

    return (
        <div className="items-start flex-col flex w-[20%] h-full  max-1024:hidden max-768:hidden max-640:hidden max-425:hidden max-375:hidden">
            <div className="items-start justify-center flex-col bg-[#121212] w-full  py-6 px-8 gap-y-5 rounded flex">
                <Link to={'/'} className="flex items-center justify-start gap-x-8 cursor-auto">
                    <img src={assets.home_icon} alt="home" height={25} width={25} className="cursor-pointer" />
                    <p className="text-white cursor-pointer">Home</p>
                </Link>
                <Link to={'/search'} className="flex items-center justify-start gap-x-8">
                    <img src={assets.search_icon} alt="search" height={25} width={25} className="cursor-pointer" />
                    <p className="text-white cursor-pointer">Search</p>
                </Link>
            </div>
            <div className="bg-[#121212] w-full mt-2 py-6 px-3 rounded h-[100%] down overflow-y-auto">
                <div className="w-full flex flex-col gap-12 px-3 justify-start items-start ">
                    <div className="flex items-center w-full flex-row gap-4 ml-2 ">
                        <img src={assets.stack_icon} alt="stack" width={25} height={25} />
                        <p className="text-white  max-1280:hidden max-1170:hidden">Favourites</p>
                    </div>
                    {likedSongs.map((item, index) => (
                        <div className="w-full h-full gap-6 flex flex-col" key={index}>
                            <div className="w-full h-full flex flex-col justify-center gap-2 pl-4 items-start">
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
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
