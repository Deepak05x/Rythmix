import React, { useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { assets } from '../assets/assets';
import MusicPlayer from '../Components/MusicPlayer';

const DisplayArtist = React.lazy(() => import('../Components/DisplayArtist'));
const DisplayAlbum = React.lazy(() => import('../Components/DisplayAlbum'));
const DisplayHome = React.lazy(() => import('../Components/DisplayHome'));
const DisplayPlaylist = React.lazy(() => import('../Components/DisplayPlaylist'));
const DisplayMusic = React.lazy(() => import('../Components/DisplayMusic'));

const DisplayContainer = () => {
    const [currentSong, setCurrentSong] = useState({
        song: 'Sweater Weather',
        artist: 'Neighboor',
        image: `${assets.img1}`,
        id: '',
    });

    const [audio] = useState(new Audio());
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className="px-2 py-2 w-full h-[100vh] flex flex-col gap-0.5">
                <div className="flex flex-row gap-2 h-[90%]">
                    <Sidebar />
                    <div className="w-[75%] bg-[#121212] rounded flex flex-col gap-12 pt-4 px-4 justify-flex-start max-1280:w-[80%] max-1024:w-full max-1024:h-[89vh] max-768:w-full max-768:h-[90vh] max-640:w-full max-425:w-full max-425:gap-8 max-375:w-full max-375:gap-8">
                        <Navbar />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<DisplayHome />} />
                                <Route path="/playlist/:id" element={<DisplayPlaylist setCurrentSong={setCurrentSong} audio={audio} setToggle={setToggle} />} />
                                <Route path="/albums/:id" element={<DisplayAlbum setCurrentSong={setCurrentSong} currentSong={currentSong} audio={audio} setToggle={setToggle} />} />
                                <Route path="/artist/:id" element={<DisplayArtist setCurrentSong={setCurrentSong} audio={audio} setToggle={setToggle} />} />
                                <Route path="/music" element={<DisplayMusic />} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
                <div className="h-[9.5%] max-768:h-[9%] max-640:h-[10%]">
                    <MusicPlayer currentSong={currentSong} audio={audio} setToggle={setToggle} toggle={toggle} />
                </div>
            </div>
        </>
    );
};

export default DisplayContainer;
