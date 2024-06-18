import React from 'react';
import { useContext } from 'react';
import { AccessContext } from '../Contexts/AcessContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const DisplayMusic = () => {
    const accessToken = useContext(AccessContext);

    return (
        <div className="flex flex-col w-full mb-1 h-[100%] gap-16 overflow-y-auto down max-1280:pr-0 max-2560:gap-20">
            <div className="flex flex-row w-full gap-8 max-1280:gap-4 max-1024:gap-6 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2">
                <Link to={'/'}>
                    <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">
                        All
                    </button>
                </Link>
                <button className="bg-white py-1 px-3 rounded-full text-black hover:scale-105 transition-all ease-in">
                    Music
                </button>
                <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">
                    Podcasts
                </button>
                <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                    Library
                </button>
            </div>
            <div className="flex flex-col gap-8">
                <section className="flex flex-row items-start pl-4 gap-12 overflow-x-auto whitespace-nowrap left ">
                    <div className="flex flex-col gap-4 w-[200px] shrink-0 max-1280:w-[170px]">
                        <img
                            src={assets.img1}
                            alt=""
                            width={150}
                            height={150}
                            className="rounded-[10px] hover:scale-105 transition-all ease"
                        />
                        <div className="flex flex-col gap-1">
                            <h4 className="text-white truncate-sm pl-2 hover:underline">
                                Title
                            </h4>
                            <p className="text-neutral-400 text-sm w-full truncate pl-2">
                                Artist
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DisplayMusic;
