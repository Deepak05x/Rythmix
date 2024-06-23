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
const DisplayPodcast = React.lazy(() => import('../Components/DisplayPodcast'));
const DisplayEpisodes = React.lazy(() => import('../Components/DisplayEpisodes'));

const DisplayContainer = () => {
    const [currentSong, setCurrentSong] = useState({
        song: 'Sweater Weather',
        artist: 'Neighboor',
        image: `${assets.img1}`,
        id: '',
    });

    const [audio] = useState(new Audio());
    const [toggle, setToggle] = useState(true);
    const [details, setDetails] = useState([]);
    const [index, setIndex] = useState(0);

    const handleForward = () => {
        const nextIndex = (index + 1) % details.length;
        const nextSong = details[nextIndex];
        setIndex(nextIndex);
        setCurrentSong({
            song: nextSong.name,
            artist: nextSong.type,
            image: nextSong.images[0].url,
        });
        audio.src = nextSong.audio_preview_url;
        audio.play();
        setToggle(false);
    };

    const handleBackward = () => {
        const prevIndex = (index - 1 + details.length) % details.length;
        const nextSong = details[prevIndex];
        setIndex(prevIndex);
        setCurrentSong({
            song: nextSong.name,
            artist: nextSong.type,
            image: nextSong.images[0].url,
        });
        audio.src = nextSong.audio_preview_url;
        audio.play();
        setToggle(false);
    };

    return (
        <>
            <div className="px-2 py-2 w-full h-[100vh] flex flex-col gap-0.5">
                <div className="flex flex-row gap-2 h-[90%]">
                    <Sidebar />
                    <div className="w-[75%] bg-[#121212] rounded flex flex-col gap-12 pt-4 px-4  max-1280:w-[80%] max-1024:w-full max-768:w-full max-640:w-full max-425:w-full max-425:gap-8 max-375:w-full max-375:gap-8">
                        <Navbar />
                        <Suspense fallback={<div>...</div>}>
                            <Routes>
                                <Route path="/" element={<DisplayHome />} />
                                <Route path="/playlist/:id" element={<DisplayPlaylist setCurrentSong={setCurrentSong} audio={audio} setToggle={setToggle} />} />
                                <Route path="/albums/:id" element={<DisplayAlbum setCurrentSong={setCurrentSong} currentSong={currentSong} audio={audio} setToggle={setToggle} />} />
                                <Route path="/artist/:id" element={<DisplayArtist setCurrentSong={setCurrentSong} audio={audio} setToggle={setToggle} />} />
                                <Route path="/music" element={<DisplayMusic setCurrentSong={setCurrentSong} audio={audio} setToggle={setToggle} />} />
                                <Route path="/podcast" element={<DisplayPodcast />} />
                                <Route
                                    path="/podcast/:id"
                                    element={
                                        <DisplayEpisodes
                                            setCurrentSong={setCurrentSong}
                                            audio={audio}
                                            setToggle={setToggle}
                                            details={details}
                                            setDetails={setDetails}
                                            index={index}
                                            setIndex={setIndex}
                                        />
                                    }
                                />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
                <div className="h-[9.5%] ">
                    <MusicPlayer
                        currentSong={currentSong}
                        audio={audio}
                        setToggle={setToggle}
                        toggle={toggle}
                        details={details}
                        setDetails={setDetails}
                        handleForward={handleForward}
                        handleBackward={handleBackward}
                    />
                </div>
            </div>
        </>
    );
};

export default DisplayContainer;
