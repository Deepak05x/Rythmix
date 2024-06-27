import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const DisplaySearch = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    const handleForwardClick = () => {
        window.history.forward();
    };
    return (
        <div className="flex flex-col gap-16 overflow-y-auto">
            <div className="flex flex-row items-start justify-between py-1 px-1 w-full max-640:justify-center max-1024:flex-col max-1024:gap-12 max-768:flex-col max-640:flex-col  max-768:gap-12 max-640:gap-12 exact-425:flex-col exact-425:items-start  exact-425:justify-center exact-425:gap-8 max-425:flex-col max-425:items-start max-425:gap-12  max-375:flex-col max-375:gap-12 ">
                <div className="flex flex-row items-start justify-start gap-12  flex-grow-0 h-full w-[25%] max-1024:w-full ">
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
                <form action="" className="flex flex-row  h-full gap-8 items-center w-[65%] max-1024:w-full">
                    <input type="text" className="border-2 bg-[#121212] border-[#ffffff1d] rounded-[10px] outline-none text-white px-4 py-2 w-[70%]" />
                    <img src={assets.search_icon} alt="" className="w-[30px] h-[30px]" />
                </form>
            </div>
            <div className="flex flex-row w-full gap-8  max-1024:gap-6 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2">
                <Link to={'/'}>
                    <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">All</button>
                </Link>
                <Link to={'/music'}>
                    <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Music</button>
                </Link>
                <Link to={'/podcast'}>
                    <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Podcasts</button>
                </Link>
                <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                    Library
                </button>
            </div>
            <section className="flex flex-col mb-4 gap-12 overflow-x-hidden  down max-2560:gap-14 max-1440:gap-14 h-full">
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
                <img src={assets.img1} alt="" className="w-[50px] h-[50px]" />
            </section>
        </div>
    );
};

export default DisplaySearch;
