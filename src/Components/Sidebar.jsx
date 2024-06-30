import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import DisplayLiked from '../Components/DisplayLiked';

const Sidebar = () => {
    return (
        <div className="items-start flex-col flex w-[20%]  max-1024:hidden max-768:hidden max-640:hidden max-425:hidden max-375:hidden">
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
            <div className="bg-[#121212] w-full mt-2 py-6 px-3 rounded h-[100%] overflow-y-auto">
                <div className="w-full flex flex-col gap-12 px-3 justify-start items-start">
                    <div className="flex items-center w-full flex-row gap-4 ">
                        <img src={assets.stack_icon} alt="stack" width={25} height={25} />
                        <p className="text-white  max-1280:hidden max-1170:hidden">Favourites</p>
                    </div>
                    <DisplayLiked />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
