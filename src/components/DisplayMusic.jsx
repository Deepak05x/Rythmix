import React from 'react';
import { useContext } from 'react';
import { AccessContext } from '../Contexts/AcessContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const DisplayMusic = () => {
    const { accessToken } = useContext(AccessContext);

    const [tamil, setTamil] = useState([]);
    const [english, setEnglish] = useState([]);
    const [hindi, setHindi] = useState([]);
    const [loading, setLoading] = useState(true);

    const getSingleTrackTamil = async () => {
        const url = `https://api.spotify.com/v1/recommendations?limit=10&market=IN&seed_artists=4zCH9qm4R2DADamUHMCa6O`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setTamil(response.data.tracks);
        } catch (err) {
            console.error('THE TAMIL DATA FETCHING WAS FAILED');
        }
    };

    const getSingleTrackEnglish = async () => {
        const url = `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=3LLNDXrxL4uxXtnUJS5XWM&seed_tracks=3MnAsEBBsEj86d03RgO4EM`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setEnglish(data.tracks);
            console.log(response.data.tracks);
        } catch (e) {
            console.log('THE ENGLISH DATA FETCHING WAS FAILED');
        }
    };

    const getSingleTrackHindi = async () => {
        const url = `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=4YRxDV8wJFPHPTeXepOstw&seed_tracks=2LcXJP95e4HKydTZ2mYfrx`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setHindi(data.tracks);
        } catch (e) {
            console.log('THE HINDI DATA FETCHING WAS FAILED');
        }
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
        <div className="flex flex-col w-full mb-1 h-[100%] gap-16 overflow-y-auto down max-1280:pr-0 max-2560:gap-20">
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
                        <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Podcasts</button>
                        <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                            Library
                        </button>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="text-white font-semibold text-2xl mt-4 flex flex-row items-center justify-between">
                            <h1>Tamil</h1>
                            <p className="text-sm text-neutral-400 pr-4 cursor-pointer hover:underline" onClick={() => getSingleTrackTamil()}>
                                Refresh
                            </p>
                        </div>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left ">
                            {tamil.map((item, index) => (
                                <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]" key={index}>
                                    <img src={item.album.images[0].url} alt="" width={200} height={200} className="rounded-[10px] hover:scale-105 transition-all ease cursor-pointer" />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-white truncate-sm pl-2 hover:underline cursor-pointer">{item.name}</h4>
                                        <p className="text-neutral-400 text-sm w-full truncate pl-2 cursor-pointer">{item.artists[0].name}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <div className="text-white font-semibold text-2xl mt-4 flex flex-row items-center justify-between">
                            <h1>English</h1>
                            <p className="text-sm text-neutral-400 pr-4 cursor-pointer hover:underline" onClick={() => getSingleTrackEnglish()}>
                                Refresh
                            </p>
                        </div>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left ">
                            {english.map((item, index) => (
                                <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]">
                                    <img src={item.album.images[0].url} alt="" width={200} height={200} className="rounded-[10px] hover:scale-105 transition-all ease" />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-white truncate-sm pl-2 hover:underline">{item.name}</h4>
                                        <p className="text-neutral-400 text-sm w-full truncate pl-2">{item.artists[0].name}</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <div className="text-white font-semibold text-2xl mt-4 flex flex-row items-center justify-between">
                            <h1>Hindi</h1>
                            <p className="text-sm text-neutral-400 pr-4 cursor-pointer hover:underline" onClick={() => getSingleTrackHindi()}>
                                Refresh
                            </p>
                        </div>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left ">
                            {hindi.map((item, index) => (
                                <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]">
                                    <img src={item.album.images[0].url} alt="" width={200} height={200} className="rounded-[10px] hover:scale-105 transition-all ease" />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-white truncate-sm pl-2 hover:underline">{item.name}</h4>
                                        <p className="text-neutral-400 text-sm w-full truncate pl-2">{item.artists[0].name}</p>
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
