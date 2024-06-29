import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CiLink } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AccessContext } from '../Contexts/AcessContext';

const DisplaySearch = () => {
    const { accessToken } = useContext(AccessContext);

    const [input, setInput] = useState('');
    const [search, setSearch] = useState([]);

    const handleBackClick = () => {
        window.history.back();
    };

    const handleForwardClick = () => {
        window.history.forward();
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const getSearchItems = async () => {
        try {
            const url = `https://api.spotify.com/v1/search?q=${input}&type=album`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data.albums.items;
            setSearch(data);
            console.log(response.data.albums.items);
        } catch (e) {
            console.log(e.message);
        }
    };

    // const timeConverter = (time) => {
    //     const totalSeconds = Math.floor(time / 1000);
    //     const minutes = Math.floor(totalSeconds / 60);
    //     const seconds = totalSeconds % 60;
    //     const paddedSeconds = seconds.toString().padStart(2, '0');

    //     return `${minutes}:${paddedSeconds}`;
    // };

    return (
        <div className="flex flex-col gap-16 overflow-y-auto h-full ">
            <div className="flex flex-row items-start justify-between py-1 px-1 w-full max-640:justify-center max-1024:flex-col max-1024:gap-12 max-768:flex-col max-640:flex-col  max-768:gap-12 max-640:gap-12 exact-425:flex-col exact-425:items-start  exact-425:justify-center exact-425:gap-8 max-425:flex-col max-425:items-start max-425:gap-12  max-375:flex-col max-375:gap-12 ">
                <div className="flex flex-row items-start justify-start gap-12  flex-grow-0 h-full w-[25%] max-1024:w-full max-768:w-full max-640:w-full max-425:w-full max-375:w-full ">
                    <div className="flex flex-row gap-4 ">
                        <img
                            src={assets.arrow_left}
                            alt="left"
                            width={35}
                            height={35}
                            className="border-black bg-[#ffffff1d] rounded-full p-2 hover:scale-110 cursor-pointer"
                            onClick={() => handleBackClick()}
                        />
                        <img
                            src={assets.arrow_right}
                            alt="left"
                            width={35}
                            height={35}
                            className="border-black bg-[#ffffff1d] rounded-full p-2 hover:scale-110 cursor-pointer"
                            onClick={() => handleForwardClick()}
                        />
                    </div>

                    <div className="flex flex-row gap-8 max-2560:hidden max-1440:hidden max-1280:hidden max-1170:hidden exact-1024:flex w-full h-full justify-end max-425:gap-4">
                        <Link to={'/'}>
                            <img src={assets.home_icon} alt="" width={35} height={35} className="border-black bg-[#ffffff1d] rounded-full p-2 hover:scale-110 cursor-pointer flex-shrink-0" />
                        </Link>
                        <Link to={'/search'}>
                            <img src={assets.search_icon} alt="" width={35} height={35} className="border-black bg-[#ffffff1d] rounded-full p-2.5 hover:scale-110 cursor-pointer" />
                        </Link>
                    </div>
                </div>
                <form
                    action=""
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-row  h-full gap-8 items-center justify-center w-[75%] max-1024:w-full max-768:w-full max-640:w-full max-425:w-full max-375:w-full"
                >
                    <input type="text" className="border-2 bg-[#121212] border-[#ffffff1d] rounded-[10px] outline-none text-white px-4 py-2 w-[70%]" value={input} onChange={handleChange} />
                    <img src={assets.search_icon} alt="" className="w-[30px] h-[30px]" onClick={() => getSearchItems()} />
                </form>
            </div>
            <div className="flex flex-row w-full gap-8  max-1024:gap-6 max-640:gap-6 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2">
                <div>
                    <button className="bg-white py-1 px-3 rounded-full text-black hover:scale-105 transition-all ease-in">Album</button>
                </div>
                <div>
                    <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Tracks</button>
                </div>
                <div>
                    <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Artists</button>
                </div>
                <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                    Library
                </button>
            </div>
            <section className="flex flex-col mb-4 gap-12 overflow-x-hidden down max-2560:gap-14 max-1440:gap-14 ">
                {search.map((item, index) => (
                    <div className="flex flex-col gap-12 " key={index}>
                        <div className="flex flex-row gap-8 w-[90%] h-full pl-8 max-425:flex-col max-640:flex-col max-375:flex-col ">
                            <div className=" max-640:hidden max-425:hidden max-375:hidden">
                                <img src={item.images[0].url} alt="" width={80} height={80} className=" rounded-full" />
                            </div>
                            <div className=" flex flex-row items-center justify-between w-full gap-2 max-425:flex-col max-425:items-start max-425:gap-8 max-375:items-start max-375:gap-8 max-375:flex-col">
                                <div className="flex flex-col gap-2">
                                    <Link to={`/albums/${item.id}`} className="text-white text-lg w-full cursor-pointer hover:underline">
                                        {item.name}
                                    </Link>
                                    <Link to={`/artist/${item.artists[0].id}`} className="text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline">
                                        {item.artists[0].name}
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <p className="text-white text-md ">{item.total_tracks}</p>
                                <a href={item.external_urls.spotify} target="_blank">
                                    <p className="text-[15px] text-neutral-400 hover:underline">
                                        <CiLink className="w-[25px] h-[25px] hover:scale-125" />
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[90%] bg-[#a3a3a377] h-[0.5px] ">-</div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default DisplaySearch;
