import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    const handleForwardClick = () => {
        window.history.forward();
    };

    return (
        <div className="flex flex-row items-start justify-between py-1 w-full max-640:justify-center max-1024:flex-col max-1024:gap-12 max-768:flex-col max-640:flex-col  max-768:gap-12 max-640:gap-12 exact-425:flex-col exact-425:items-start  exact-425:justify-center exact-425:gap-8 max-425:flex-col max-425:items-start max-425:gap-12  max-375:flex-col max-375:gap-12 ">
            <div className="flex flex-row items-start justify-start gap-12 flex-grow-0 h-full w-full ">
                <div className="flex flex-row gap-4 arrow">
                    <img
                        src={assets.arrow_left}
                        alt="left"
                        width={35}
                        height={35}
                        className="border-black bg-[#ffffff1d] rounded-full p-2 hover:scale-110 transition-all ease-in cursor-pointer"
                        onClick={() => handleBackClick()}
                    />
                    <img
                        src={assets.arrow_right}
                        alt="left"
                        width={35}
                        height={35}
                        className="border-black bg-[#ffffff1d] rounded-full p-2 hover:scale-110 transition-all ease-in cursor-pointer"
                        onClick={() => handleForwardClick()}
                    />
                </div>

                <div className="flex flex-row gap-8 max-2560:hidden max-1440:hidden max-1280:hidden max-1170:hidden exact-1024:flex w-full h-full justify-end max-425:gap-4 icons">
                    <Link to={'/search'}>
                        <img src={assets.search_icon} alt="" width={35} height={35} className="border-black bg-[#ffffff1d] rounded-full p-2.5 hover:scale-110 cursor-pointer" />
                    </Link>
                    <Link to={'/'}>
                        <img src={assets.home_icon} alt="" width={35} height={35} className="border-black bg-[#ffffff1d] rounded-full p-2 hover:scale-110 cursor-pointer flex-shrink-0" />
                    </Link>
                </div>
            </div>

            <div className=" w-full flex flex-row items-center max-1024:justify-start max-768:justify-start max-640:justify-start justify-end gap-8 max-768:gap-5 max-425:justify-start max-375:justify-start flex-shrink-1">
                <Link to={'/explore'} className="bg-white text-black py-1.5 px-4 rounded-full font-medium  max-640:px-4 max-425:px-4  max-375:px-4  hover:scale-105 transition-all ease-in">
                    Explore Rythmix
                </Link>
                <p className="bg-purple-500 py-2 px-4 rounded-full cursor-pointer font-medium text-base hover:scale-110 transition-all ease-in">D</p>
            </div>
        </div>
    );
};

export default Navbar;
