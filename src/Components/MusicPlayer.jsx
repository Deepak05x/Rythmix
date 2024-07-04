import React from 'react';
import { assets } from '../assets/assets';
import { MdPlayArrow, MdPause } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MusicPlayer = ({ currentSong, audio, toggle, setToggle, handleForward, handleBackward }) => {
    const [isMuted, setIsMuted] = useState(false);

    const handleChange = () => {
        if (toggle === false) {
            audio.pause();
        } else {
            audio.play();
        }
        setToggle((prevToggle) => !prevToggle);
    };

    const handleMute = () => {
        audio.muted = !audio.muted;
        setIsMuted(audio.muted);
    };

    return (
        <div className="flex items-center justify-between w-full h-full  bg-[#121212] py-4 px-4 flex-row mt-1 max-768:justify-between max-1024:bg-[#121212] music ">
            <div className="flex flex-row gap-x-3 w-full max-1440:items-center max-1170:items-center max-1280:items-center max-1024:items-center max-768:w-[10%] max-640:w-[10%] max-375:hidden">
                <img
                    src={currentSong.image}
                    alt=""
                    width={50}
                    height={40}
                    className=" rounded-full  max-1440:h-[50px] max-1440:w-[50px] max-1170:w-[50px] max-1170:h-[50px] max-1280:w-[50px] max-1280:h-[50px] max-1024:w-[50px] max-1024:h-[50px] max-1024:rounded-full max-768:w-[45px] max-768:h-[45px] max-768:rounded-full max-640:rounded-full max-640:w-[50px] max-425:w-[50px] max-425:rounded-full"
                />
                <div className="text-white flex items-start justify-center flex-col gap-y-1 max-768:hidden max-640:hidden max-425:hidden exact-1024:gap-1 max-1024:gap-1">
                    <p className="max-1280:text-[15px] max-1170:text-[15px] max-1024:text-[15px] max-1440:text-[15px] truncate-sm ">{currentSong.song}</p>
                    <p className="text-neutral-400 max-1280:text-[15px] max-1440:text-[15px] max-1024:text-[15px] max-1170:text-[15px]">{currentSong.artist}</p>
                </div>
            </div>
            <div className="flex flex-col items-center w-full gap-2 max-1024:mr-8 max-1024:gap-2 max-1024:mt-2 max-640:w-[90%] max-768:mt-1">
                <div className="flex flex-row items-center gap-8 max-425:gap-4  ">
                    <img src={assets.prev_icon} alt="" width={20} height={20} className=" hover:opacity-50 transition-all ease-in cursor-pointer" onClick={() => handleBackward()} />
                    {toggle ? (
                        <MdPlayArrow color="white" onClick={() => handleChange()} size={30} className="flex-shrink-0 cursor-pointer hover:opacity-50 transition-all ease-in" />
                    ) : (
                        <MdPause color="white" onClick={() => handleChange()} size={30} className="flex-shrink-0 cursor-pointer hover:opacity-50 transition-all ease-in" />
                    )}
                    <img src={assets.next_icon} alt="" width={20} height={20} className=" hover:opacity-50 transition-all ease-in cursor-pointer" onClick={() => handleForward()} />
                </div>
            </div>
            <div className="w-full  flex flex-row items-center justify-end gap-6 opacity-70 max-1024:hidden max-768:hidden max-640:hidden max-425:hidden max-375:hidden">
                {isMuted ? (
                    <>
                        <hr className="text-white absolute right-[6.5rem] w-[30px] rotate-45" />
                        <img src={assets.volume_icon} alt="" width={23} height={23} onClick={() => handleMute()} className="relative cursor-pointer" />
                        <Link className="cursor-pointer" to={'/explore'}>
                            <img src={assets.mini_player_icon} alt="" width={17} height={17} />
                        </Link>

                        <img src={assets.zoom_icon} alt="" width={17} height={17} />
                    </>
                ) : (
                    <>
                        <img src={assets.volume_icon} alt="" width={23} height={23} onClick={() => handleMute()} className="relative cursor-pointer" />
                        <Link to={'/explore'}>
                            <img src={assets.mini_player_icon} alt="" width={17} height={17} />
                        </Link>
                        <img src={assets.zoom_icon} alt="" width={17} height={17} />
                    </>
                )}
            </div>
        </div>
    );
};

export default MusicPlayer;
