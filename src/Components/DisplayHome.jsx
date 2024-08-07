import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AccessContext } from '../Contexts/AcessContext';
import { ClipLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from './Navbar';

const DisplayHome = () => {
    const { accessToken } = useContext(AccessContext);
    const [albums, setAlbums] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPlaylist = async () => {
        try {
            const url = 'https://api.spotify.com/v1/browse/featured-playlists?limit=10';
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data.playlists.items;
            setPlayList(data);
        } catch (e) {
            console.log('THE PLAYLIST FETCHING WAS FAILED');
        }
    };

    const getAlbums = async () => {
        try {
            const url =
                'https://api.spotify.com/v1/albums?ids=4rFrdkSWs0dtj0rWPzOk1v%2C0vmYAygGWZZ4pO6L3xC2kX%2C7k1b8wzjRsSTmIBuRlBrxp%2C1Zbod8FPsrcpKCR64oHK0M%2C6FgtuX3PtiB5civjHYhc52%2C3cfAM8b8KqJRoIzt3zLKqw%2C2TbvDOYsVd4S4d5KnUx7fP%2C253H7iC7BYj4szx25Eym83%2C6FdMTnvFRHSEpOXf5Xrvx4%2C2uiQo0DIcriQKVm5ivXuDO';
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data.albums;
            setAlbums(data);
        } catch (e) {
            console.log('THE ALBUM FETCHING WAS FAILED');
        }
    };

    const getArtist = async () => {
        try {
            const url =
                'https://api.spotify.com/v1/artists?ids=0Y5tJX1MQlPlqiwlOH1tJY%2C5VVN3xZw1i2qihfITZlvCZ%2C1mYsTxnqsietFxj1OgoGbG%2C4zCH9qm4R2DADamUHMCa6O%2C5cB4d4jPYjMT326sjihQ4m%2C5yoqPvofOHrBc3Z6VZyTsj%2C6VuMaDnrHyPL1p4EHjYLi7%2C7vk5e3vY1uw9plTHJAMwjN%2C1lDx24tVvy8JVKOVjnlJfv%2C0C8ZW7ezQVs4URX5aX7Kqx';
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data.artists;
            setArtists(data);
        } catch (e) {
            console.log('THE ARTIST FETCHING WAS FAILED');
        }
    };

    useEffect(() => {
        getAlbums();
        getArtist();
        getPlaylist();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken]);

    return (
        <div className="flex flex-col w-full  h-[100%] gap-16 overflow-y-auto down overflow-x-hidden my-4 pt-4 px-4">
            {loading ? (
                <div className="flex items-center justify-center h-full w-full overflow-hidden">
                    <ClipLoader loading={loading} size={60} color={'white'} />
                </div>
            ) : (
                <>
                    <div className="px-4">
                        <Navbar />
                    </div>
                    <div className="flex flex-row w-full gap-8 max-1024:gap-6 max-768:gap-6 max-640:gap-3 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2 px-4">
                        <Link to={'/'}>
                            <button className="bg-white py-1 px-3 rounded-full hover:scale-105 transition-all ease-in">All</button>
                        </Link>
                        <Link to={'/music'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Music</button>
                        </Link>
                        <Link to={'/podcast'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Podcasts</button>
                        </Link>
                        <Link to={'/library'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                                Library
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-10 mb-4 px-4 ">
                        <h1 className="text-white font-semibold text-2xl">Featured Albums</h1>
                        <section className="flex flex-row items-start  pl-4  gap-12 overflow-x-auto  whitespace-nowrap left pb-10  ">
                            {albums.map((item, index) => (
                                <Link to={`/albums/${item.id}`} className="flex flex-col gap-4 w-[200px] shrink-0" key={index}>
                                    <div className="hover:scale-105 transition-all ease-in">
                                        <LazyLoadImage src={item.images[0].url} alt={item.name} width={200} height={200} className="rounded-[10px]" effect="blur" />
                                    </div>

                                    <div className="flex flex-col pl-2 gap-1">
                                        <h4 className="text-white truncate-sm  hover:underline">{item.name}</h4>
                                        <p className="text-neutral-400 text-sm w-full truncate ">{item.label}</p>
                                    </div>
                                </Link>
                            ))}
                        </section>
                        <h1 className="text-white font-semibold text-2xl mt-4">Top Playlists</h1>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left pb-10">
                            {playList.map((item, index) => (
                                <Link to={`/playlist/${item.id}`} className="flex flex-col gap-4 w-[200px] shrink-0  cursor-pointer" key={index}>
                                    <div className="hover:scale-105 transition-all ease-in">
                                        <LazyLoadImage src={item.images[0].url} alt={item.name} width={200} height={200} className="rounded-[10px] " effect="blur" />
                                    </div>

                                    <div className="flex flex-col gap-1 pl-2">
                                        <h4 className="text-white truncate-sm hover:underline">{item.name}</h4>
                                        <p className="text-neutral-400 text-sm w-full truncate ">{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </section>
                        <h1 className="text-white font-semibold text-2xl mt-4">Top Artists</h1>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left pb-10 ">
                            {artists.map((item, index) => (
                                <Link to={`/artist/${item.id}`} className="flex flex-col gap-4 shrink-0 items-center " key={index}>
                                    <div className="hover:opacity-70 transition-all  ease-in">
                                        <LazyLoadImage src={item.images[1].url} alt="" className="rounded-full  w-[200px] h-[200px]" effect="blur" />
                                    </div>

                                    <h4 className="text-white hover:underline">{item.name}</h4>
                                </Link>
                            ))}
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default DisplayHome;
