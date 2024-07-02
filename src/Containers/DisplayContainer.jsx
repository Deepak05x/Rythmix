import React, { useState, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { assets } from '../assets/assets';
import MusicPlayer from '../Components/MusicPlayer';
import DisplayLib from '../Components/DisplayLib';

const DisplayArtist = React.lazy(() => import('../Components/DisplayArtist'));
const DisplayAlbum = React.lazy(() => import('../Components/DisplayAlbum'));
const DisplayHome = React.lazy(() => import('../Components/DisplayHome'));
const DisplayPlaylist = React.lazy(() => import('../Components/DisplayPlaylist'));
const DisplayMusic = React.lazy(() => import('../Components/DisplayMusic'));
const DisplayPodcast = React.lazy(() => import('../Components/DisplayPodcast'));
const DisplayEpisodes = React.lazy(() => import('../Components/DisplayEpisodes'));
const ExplorePage = React.lazy(() => import('../Components/ExplorePage'));
const DisplaySearch = React.lazy(() => import('../Components/DisplaySearch'));

const DisplayContainer = () => {
    const [currentSong, setCurrentSong] = useState({
        song: 'Sweater Weather',
        artist: 'Neighbourhood',
        image: `https://i.scdn.co/image/ab67616d0000b273d425066031fb32f5916a0099`,
    });

    const [audio] = useState(new Audio('https://p.scdn.co/mp3-preview/b428f5e0e7f6a11f7058bfedd113d8a5d9305469?cid=622d5e3ea1ed4286a4efbda2736a94f3'));
    const [toggle, setToggle] = useState(true);
    const [details, setDetails] = useState([]);
    const [album, setAlbum] = useState([]);
    const [mainImageAlbum, setMainImageAlbum] = useState([]);
    const [list, setList] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [index, setIndex] = useState(0);
    const [currentType, setCurrentType] = useState('');
    const [tamil, setTamil] = useState([]);
    const [english, setEnglish] = useState([]);
    const [hindi, setHindi] = useState([]);
    const [likedSongs, setLikedSongs] = useState(() => {
        const savedLikedSongs = localStorage.getItem('likedSongs');
        return savedLikedSongs ? JSON.parse(savedLikedSongs) : [];
    });

    console.log(audio);

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        }, 1000);
    }, [likedSongs]);

    const getSongUrl = (item) => {
        if (item.preview_url) {
            return item.preview_url;
        } else if (item.track && item.track.preview_url) {
            return item.track.preview_url;
        } else if (item.audio_preview_url) {
            return item.audio_preview_url;
        }
    };

    const getArtistName = (item) => {
        if (item.artists) {
            return item.artists[0].name;
        } else if (item.track && item.track.artists) {
            return item.track.artists[0].name;
        }
        return 'Unknown Artist';
    };

    const getSongName = (item) => {
        if (item.name) {
            return item.name;
        } else if (item.track && item.track.name) {
            return item.track.name;
        }
    };

    console.log(mainImageAlbum);

    const getSongImage = (item) => {
        if (item.track && item.track.album && item.track.album.images[0].url) {
            return item.track.album.images[0].url;
        } else if (item.album && item.album.images && item.album.images[0].url) {
            return item.album.images[0].url;
        } else if (mainImageAlbum && mainImageAlbum[0].url) {
            return mainImageAlbum[0].url;
        }
    };

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
            audio.src = getSongUrl(nextSong);
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
            audio.src = getSongUrl(nextSong);
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
            audio.src = getSongUrl(nextSong);
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
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'tamil') {
            const nextIndex = (index + 1) % tamil.length;
            const nextSong = tamil[nextIndex];

            setIndex(nextIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'english') {
            const nextIndex = (index + 1) % english.length;
            const nextSong = english[nextIndex];

            setIndex(nextIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'hindi') {
            const nextIndex = (index + 1) % hindi.length;
            const nextSong = hindi[nextIndex];

            setIndex(nextIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'fav') {
            const nextIndex = (index + 1) % likedSongs.length;
            const nextSong = likedSongs[nextIndex];
            setIndex(nextIndex);
            setCurrentSong({
                song: getSongName(nextSong),
                artist: getArtistName(nextSong),
                image: getSongImage(nextSong),
            });
            audio.src = getSongUrl(nextSong);
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
            audio.src = getSongUrl(nextSong);
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
            audio.src = getSongUrl(nextSong);
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
            audio.src = getSongUrl(nextSong);
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
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'tamil') {
            const prevIndex = (index - 1 + tamil.length) % tamil.length;
            const nextSong = tamil[prevIndex];
            setIndex(prevIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'english') {
            const prevIndex = (index - 1 + english.length) % english.length;
            const nextSong = english[prevIndex];
            setIndex(prevIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'hindi') {
            const prevIndex = (index - 1 + hindi.length) % hindi.length;
            const nextSong = hindi[prevIndex];
            setIndex(prevIndex);
            setCurrentSong({
                song: nextSong.name,
                artist: nextSong.artists[0].name,
                image: nextSong.album.images[0].url,
            });
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        } else if (currentType === 'fav') {
            const nextIndex = (index - 1 + likedSongs.length) % likedSongs.length;
            const nextSong = likedSongs[nextIndex];

            setIndex(nextIndex);
            setCurrentSong({
                song: getSongName(nextSong),
                artist: getArtistName(nextSong),
                image: getSongImage(nextSong),
            });
            audio.src = getSongUrl(nextSong);
            audio.play();
            setToggle(false);
        }
    };

    console.log(likedSongs);

    return (
        <>
            <div className="px-2 py-2 w-full h-[100vh] flex flex-col gap-0.5">
                <div className="flex flex-row gap-2 h-[90%]">
                    <Sidebar
                        likedSongs={likedSongs}
                        audio={audio}
                        setCurrentSong={setCurrentSong}
                        setCurrentType={setCurrentType}
                        setIndex={setIndex}
                        mainImageAlbum={mainImageAlbum}
                        setToggle={setToggle}
                        setLikedSongs={setLikedSongs}
                        currentType={currentType}
                        getSongUrl={getSongUrl}
                        getArtistName={getArtistName}
                        getSongName={getSongName}
                        getSongImage={getSongImage}
                    />

                    <div className="w-[80%] bg-[#121212]  rounded flex flex-col gap-12  max-1024:w-full max-768:w-full max-640:w-full max-425:w-full max-425:gap-8 max-375:w-full max-375:gap-8">
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
                                            setLikedSongs={setLikedSongs}
                                            likedSongs={likedSongs}
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
                                            likedSongs={likedSongs}
                                            setLikedSongs={setLikedSongs}
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
                                            likedSongs={likedSongs}
                                            setLikedSongs={setLikedSongs}
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
                                            english={english}
                                            setEnglish={setEnglish}
                                            hindi={hindi}
                                            setHindi={setHindi}
                                            likedSongs={likedSongs}
                                            setLikedSongs={setLikedSongs}
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
                                <Route
                                    path="/library"
                                    element={
                                        <DisplayLib
                                            likedSongs={likedSongs}
                                            audio={audio}
                                            setCurrentSong={setCurrentSong}
                                            setCurrentType={setCurrentType}
                                            setIndex={setIndex}
                                            mainImageAlbum={mainImageAlbum}
                                            setToggle={setToggle}
                                            setLikedSongs={setLikedSongs}
                                            currentType={currentType}
                                            getSongUrl={getSongUrl}
                                            getArtistName={getArtistName}
                                            getSongName={getSongName}
                                            getSongImage={getSongImage}
                                        />
                                    }
                                />
                                <Route path="/explore" element={<ExplorePage />} />
                                <Route path="/search" element={<DisplaySearch />} />
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
