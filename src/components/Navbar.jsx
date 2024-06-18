import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    return (
        <div className="flex flex-row items-start justify-between w-full max-640:justify-center exact-425:flex-col exact-425:items-start  exact-425:justify-center exact-425:gap-8 max-425:flex-col max-425:items-start max-425:gap-6  max-375:flex-col max-375:gap-6 ">
            <div className="flex flex-row items-start justify-start gap-4 w-[35%] flex-grow-0 ">
                <img
                    src={assets.arrow_left}
                    alt="left"
                    width={35}
                    height={35}
                    className="border-black bg-black rounded-full p-2"
                />
                <img
                    src={assets.arrow_right}
                    alt="left"
                    width={35}
                    height={35}
                    className="border-black bg-black rounded-full p-2"
                />
            </div>
            <div className="w-full flex flex-row items-center justify-end gap-8 max-768:gap-5 max-425:justify-start max-375:justify-start flex-shrink-1">
                <button className="bg-white text-black py-1.5 px-4 rounded-full font-medium max-768:font-medium max-768:text-sm max-640:text-sm max-640:px-4 max-425:px-4 max-425:text-sm max-375:px-2 max-375:text-[10px] hover:scale-105 transition-all ease-in">
                    Explore Rythmix
                </button>
                <p className="bg-purple-500 py-2 px-4 rounded-full font-medium text-base">
                    D
                </p>
            </div>
        </div>
    );
};

export default Navbar;
