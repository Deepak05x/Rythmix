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
const ExplorePage = React.lazy(() => import('../Components/ExplorePage'));

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
    const [album, setAlbum] = useState([]);
    const [mainImageAlbum, setMainImageAlbum] = useState([]);
    const [list, setList] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [index, setIndex] = useState(0);
    const [currentType, setCurrentType] = useState('');
    const [tamil, setTamil] = useState([]);

    const handleForward = () => {
        if (currentType === 'album') {
            const nextIndex = (index + 1) % album.length;
            const nextSong = album[nextIndex];
            setIndex(nextIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: mainImageAlbum[0].url,
            });
            audio.src = nextSong.preview_url;
            audio.play();
            setToggle(false);
        } else if (currentType === 'episodes') {
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
        } else if (currentType === 'playlist') {
            const nextIndex = (index + 1) % list.length;
            const nextSong = list[nextIndex];
            setIndex(nextIndex);
            setCurrentSong({
                song: nextSong.track.name,
                artist: nextSong.track.artists[0].name,
                image: nextSong.track.album.images[0].url,
            });
            audio.src = nextSong.track.preview_url;
            audio.play();
            setToggle(false);
        } else if (currentType === 'artist') {
            const nextIndex = (index + 1) % tracks.length;
            const nextSong = tracks[nextIndex];
            setIndex(nextIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = nextSong.preview_url;
            audio.play();
            setToggle(false);
        } else if (currentType === 'tamil') {
            const nextIndex = (index + 1) % tamil.length;
            const nextSong = tamil[nextIndex];
            console.log(nextSong);
            setIndex(nextIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = nextSong.preview_url;
            audio.play();
            setToggle(false);
        }
    };

    const handleBackward = () => {
        if (currentType === 'album') {
            const prevIndex = (index - 1 + album.length) % album.length;
            const nextSong = album[prevIndex];
            setIndex(prevIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: mainImageAlbum[0].url,
            });
            audio.src = nextSong.preview_url;
            audio.play();
            setToggle(false);
        } else if (currentType === 'episodes') {
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
        } else if (currentType === 'playlist') {
            const prevIndex = (index - 1 + list.length) % list.length;
            const nextSong = list[prevIndex];
            setIndex(prevIndex);
            setCurrentSong({
                song: nextSong.track.name,
                artist: nextSong.track.artists[0].name,
                image: nextSong.track.album.images[0].url,
            });
            audio.src = nextSong.track.preview_url;
            audio.play();
            setToggle(false);
        } else if (currentType === 'artist') {
            const prevIndex = (index - 1 + tracks.length) % tracks.length;
            const nextSong = tracks[prevIndex];
            setIndex(prevIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = nextSong.preview_url;
            audio.play();
            setToggle(false);
        }
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
                                <Route
                                    path="/playlist/:id"
                                    element={
                                        <DisplayPlaylist
                                            setCurrentSong={setCurrentSong}
                                            audio={audio}
                                            setToggle={setToggle}
                                            list={list}
                                            setList={setList}
                                            setCurrentType={setCurrentType}
                                            setIndex={setIndex}
                                        />
                                    }
                                />
                                <Route
                                    path="/albums/:id"
                                    element={
                                        <DisplayAlbum
                                            setCurrentSong={setCurrentSong}
                                            currentSong={currentSong}
                                            audio={audio}
                                            setToggle={setToggle}
                                            setCurrentType={setCurrentType}
                                            album={album}
                                            setAlbum={setAlbum}
                                            setMainImageAlbum={setMainImageAlbum}
                                            mainImageAlbum={mainImageAlbum}
                                            setIndex={setIndex}
                                        />
                                    }
                                />
                                <Route
                                    path="/artist/:id"
                                    element={
                                        <DisplayArtist
                                            setCurrentSong={setCurrentSong}
                                            audio={audio}
                                            setToggle={setToggle}
                                            tracks={tracks}
                                            setTracks={setTracks}
                                            setCurrentType={setCurrentType}
                                            setIndex={setIndex}
                                        />
                                    }
                                />
                                <Route
                                    path="/music"
                                    element={
                                        <DisplayMusic
                                            setCurrentSong={setCurrentSong}
                                            audio={audio}
                                            setToggle={setToggle}
                                            setCurrentType={setCurrentType}
                                            setIndex={setIndex}
                                            index={index}
                                            tamil={tamil}
                                            setTamil={setTamil}
                                        />
                                    }
                                />
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
                                            setCurrentType={setCurrentType}
                                        />
                                    }
                                />
                                <Route path="/explore" element={<ExplorePage />} />
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
