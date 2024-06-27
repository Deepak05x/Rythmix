import React from 'react';
import { useContext } from 'react';
import { AccessContext } from '../Contexts/AcessContext';
import { Link } from 'react-router-dom';
import { CiLink } from 'react-icons/ci';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const DisplayMusic = ({ setCurrentSong, audio, setToggle, setCurrentType, setIndex, tamil, setTamil }) => {
    const { accessToken } = useContext(AccessContext);

    const [english, setEnglish] = useState([]);
    const [hindi, setHindi] = useState([]);
    const [loading, setLoading] = useState(true);

    const getSingleTrackTamil = async () => {
        const url = `https://api.spotify.com/v1/tracks?ids=2KmnZRQMoXVbW3iH4rgCqA%2C3jrOziEVwpJAETyEDZ5HWa%2C3X61lP4xN7OPiM9dwitXV5%2C7vgs4iy222SQb7jFOFRmoG%2C4Ndcwn2iAt1MdU6lpw24ZQ%2C50wYLZqR1fTT7gAt0HLYsD%2C7wlPpc2pWUBBslyq8oacVL%2C5jXrULyYKHjkAMk4TXZFoG%2C7fDspJMr8PD39mquXZffTy%2C6eE9euoz9B0jF4XHqL9Gx8`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setTamil(response.data.tracks);
            console.log(response.data.tracks);
        } catch (err) {
            console.error('THE TAMIL DATA FETCHING WAS FAILED');
        }
    };

    const getSingleTrackEnglish = async () => {
        const url = `https://api.spotify.com/v1/tracks?ids=7ITa0xitCADZzJlPRnoHX9%2C6VObnIkLVruX4UVyxWhlqm%2C6pWgRkpqVfxnj3WuIcJ7WP%2C6jdwbcH788txYS6Doy1F1j%2C58HvfVOeJY7lUuCqF0m3ly%2C4gvrJnKCKIPiacNsWVQwEU%2C6SmY2weGqtsre31cJwTNoD%2C0qOnSQQF0yzuPWsXrQ9paz%2C4ewazQLXFTDC8XvCbhvtXs%2C1Fid2jjqsHViMX6xNH70hE`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setEnglish(response.data.tracks);
        } catch (err) {
            console.error('THE TAMIL DATA FETCHING WAS FAILED');
        }
    };

    const getSingleTrackHindi = async () => {
        const url = `https://api.spotify.com/v1/tracks?ids=2LcXJP95e4HKydTZ2mYfrx%2C6Ozx2ngGtXrqznTKhKBlrT%2C4rNlSH6WP8ML0Yke8sPmNx%2C72zHuDxFQTjbL51qJQSA7j%2C4nc6XiUze2Yh7wFueGOPv7%2C7JGgKHHDgJCJkQCQxyHHdl%2C1feANd8EfcDP5UqSvbheM3%2C16W3Eqvgh4Sl84RoHZYnNV%2C3H43T5swYywvcdCBFiDgW6%2C5zCnGtCl5Ac5zlFHXaZmhy`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setHindi(response.data.tracks);
        } catch (err) {
            console.error('THE TAMIL DATA FETCHING WAS FAILED');
        }
    };

    const handleSelectionTamil = (song, index) => {
        setCurrentSong({
            song: song.name,
            artist: song.artists[0].name,
            image: song.album.images[0].url,
        });
        audio.src = song.preview_url;
        audio.play();
        setIndex(index);
        setCurrentType('tamil');
        setToggle(false);
    };

    useEffect(() => {
        getSingleTrackTamil();
        getSingleTrackEnglish();
        getSingleTrackHindi();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken]);

    return (
        <div className="flex flex-col w-full mb-1 h-[100%] gap-16 overflow-y-auto down max-1280:pr-0">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full">
                    <ClipLoader color="white" loading={true} size={60} />
                </div>
            ) : (
                <>
                    <div className="flex flex-row w-full gap-8 max-1280:gap-4 max-1024:gap-6 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2">
                        <Link to={'/'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">All</button>
                        </Link>
                        <button className="bg-white py-1 px-3 rounded-full text-black hover:scale-105 transition-all ease-in">Music</button>
                        <Link to={'/podcast'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Podcasts</button>
                        </Link>

                        <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                            Library
                        </button>
                    </div>

                    <div className="flex flex-col gap-10 mb-4">
                        <h1 className="text-white font-semibold text-2xl">Tamil</h1>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left ">
                            {tamil.map((item, index) => (
                                <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]" key={index}>
                                    <div className="hover:scale-105 transition-all ease-in">
                                        <LazyLoadImage src={item.album.images[0].url} alt="" width={200} height={200} className="rounded-[10px] " effect="blur" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-white truncate-sm pl-2 hover:underline cursor-pointer" onClick={() => handleSelectionTamil(item, index)}>
                                            {item.name}
                                        </h4>
                                        <div className="flex flex-col">
                                            <Link to={`/artist/${item?.artists[0]?.id}`}>
                                                <p className="text-neutral-400 text-sm w-full truncate pl-2 cursor-pointer hover:underline">{item.artists[0].name}</p>
                                            </Link>
                                            <a href={item.external_urls.spotify} target="_blank">
                                                <CiLink className=" text-neutral-400 w-[30px] h-[30px] hover:scale-125 pl-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <h1 className="text-white font-semibold text-2xl mt-4">English</h1>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left ">
                            {english.map((item, index) => (
                                <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]" key={index}>
                                    <div className="hover:scale-105 transition-all ease-in">
                                        <LazyLoadImage effect="blur" src={item.album.images[0].url} alt="" width={200} height={200} className="rounded-[10px] " />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-white truncate-sm pl-2 hover:underline cursor-pointer" onClick={() => handleSelection(item)}>
                                            {item.name}
                                        </h4>
                                        <div className="flex flex-col">
                                            <Link to={`/artist/${item?.artists[0]?.id}`}>
                                                <p className="text-neutral-400 text-sm w-full truncate pl-2 cursor-pointer hover:underline">{item.artists[0].name}</p>
                                            </Link>
                                            <a href={item.external_urls.spotify} target="_blank">
                                                <CiLink className=" text-neutral-400 w-[30px] h-[30px] hover:scale-125 pl-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <h1 className="text-white font-semibold text-2xl mt-4">Hindi</h1>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left">
                            {hindi.map((item, index) => (
                                <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]" key={index}>
                                    <div className="hover:scale-105 transition-all ease-in">
                                        <LazyLoadImage effect="blur" src={item.album.images[0].url} alt="" width={200} height={200} className="rounded-[10px] " />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-white truncate-sm pl-2 hover:underline cursor-pointer" onClick={() => handleSelection(item)}>
                                            {item.name}
                                        </h4>
                                        <div className="flex flex-col">
                                            <Link to={`/artist/${item?.artists[0]?.id}`}>
                                                <p className="text-neutral-400 text-sm w-full truncate pl-2 cursor-pointer hover:underline">{item.artists[0].name}</p>
                                            </Link>
                                            <a href={item.external_urls.spotify} target="_blank">
                                                <CiLink className=" text-neutral-400 w-[30px] h-[30px] hover:scale-125 pl-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default DisplayMusic;
