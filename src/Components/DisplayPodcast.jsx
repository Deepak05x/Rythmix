import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AccessContext } from '../Contexts/AcessContext';
import { ClipLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from './Navbar';

const DisplayPodcast = () => {
    const { accessToken } = useContext(AccessContext);

    const [podcast, setPodcast] = useState([]);
    const [funny, setFunny] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPodcast = async () => {
        try {
            const url = `https://api.spotify.com/v1/shows?ids=7CpuEnbCLIXwI6LEcbBOYP%2C3ptiw7nOKh5vsMoar79YGc%2C1VXcH8QHkjRcTCEd88U3ti%2C4rOoJ6Egrf8K2IrywzwOMk%2C6ll0MwobDt1JW9gYaOONEo%2C0ofXAdFIQQRsCYj9754UFx%2C5W7LkvmLXswbae9lSejsx2%2C35Ntc5kndMt5uUCD3RtLhL%2C0KVZ16mLZ1bbNlnKemYTzm%2C0U9S5J2ltMaKdxIfLuEjzE`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data.shows;
            setPodcast(data);
        } catch (e) {
            console.log('THE PODCAST FETCHING WAS FAILED');
        }
    };

    const getFunnyPodcast = async () => {
        try {
            const url = `https://api.spotify.com/v1/shows?ids=7egirHtCDdBVCdnalgU62j%2C1DjQ9TBzvB3B4xUgGWSVsB%2C0UPes6otTfxvCE11FkEkOj%2C3L5xDdyrLaeV6ZEEwilNJ0%2C0wpMAZCIMXptoGnFvaISNO%2C4oyN9Y65Er9CfsiyYI497l%2C3JRk8ygn1INdXC7ZEHV51a%2C6IVKMJnrVorjdJr8TdEfl4%2C0UuiqflgKckLEqTGT05VGV%2C5rH9aNtJSMdFB3117uBHnZ`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data.shows;
            setFunny(data);
        } catch (e) {
            console.log('THE FUNNY PODCAST FETCHING WAS FAILED');
        }
    };

    useEffect(() => {
        getPodcast();
        getFunnyPodcast();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken]);

    return (
        <div className="flex flex-col w-full  h-[100%] gap-16 overflow-y-auto down my-4 pt-4 px-4 ">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    <ClipLoader loading={true} size={60} color={'white'} />
                </div>
            ) : (
                <>
                    <div className="px-4">
                        <Navbar />
                    </div>

                    <div className="flex flex-row w-full gap-8 max-1024:gap-6 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2 px-4">
                        <Link to={'/'}>
                            <button className="bg-[#ffffff1d] text-white py-1 px-3 rounded-full hover:scale-105 transition-all ease-in">All</button>
                        </Link>
                        <Link to={'/music'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Music</button>
                        </Link>
                        <button className="bg-white py-1 px-3 rounded-full text-black hover:scale-105 transition-all ease-in">Podcasts</button>
                        <Link to={'/library'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                                Library
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-10 mb-4 px-5">
                        <h1 className="text-white font-semibold text-2xl">Featured Podcasts</h1>

                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left pb-10">
                            {podcast.map((item, index) => (
                                <Link to={`/podcast/${item.id}`} key={index}>
                                    <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]">
                                        <div className=" hover:scale-105 transition-all ease-in">
                                            <LazyLoadImage effect="blur" src={item.images[0].url} width={200} height={200} alt="" className="rounded-[10px]" />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-white truncate-sm pl-2 hover:underline cursor-pointer">{item.name}</h2>

                                            <p className="text-neutral-400 text-sm w-full truncate-sm pl-2 ">{item.publisher}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </section>

                        <h1 className="text-white font-semibold text-2xl mt-4">Funny Podcasts</h1>
                        <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left pb-10">
                            {funny.map((item, index) => (
                                <Link to={`/podcast/${item.id}`} key={index}>
                                    <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]" key={index}>
                                        <div className=" hover:scale-105 transition-all ease-in">
                                            <LazyLoadImage effect="blur" src={item.images[0].url} width={200} height={200} alt="" className="rounded-[10px]" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-white truncate-sm pl-2 hover:underline cursor-pointer">{item.name}</h2>

                                            <p className="text-neutral-400 text-sm w-full truncate-sm pl-2 ">{item.publisher}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default DisplayPodcast;
