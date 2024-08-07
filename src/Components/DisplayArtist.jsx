import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AccessContext } from '../Contexts/AcessContext';
import { CiLink } from 'react-icons/ci';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from './Navbar';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const DisplayArtist = ({ setCurrentSong, audio, setToggle, tracks, setTracks, setCurrentType, setIndex, likedSongs, setLikedSongs }) => {
    const [artist, setArtist] = useState({});

    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const { accessToken } = useContext(AccessContext);

    const getArtist = async () => {
        try {
            const url = `https://api.spotify.com/v1/artists/${id}`;
            const response = await axios(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setArtist(data);
        } catch (e) {
            console.log('THE SINGLE ARTIST FETCHING WAS FAILED');
            console.log(e.message);
        }
    };

    const getArtistTracks = async () => {
        try {
            const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data.tracks;
            setTracks(data);
        } catch (e) {
            console.log('THE TRACKS FETCHING FROM THE SINGLE ARTIST WAS FAILED');
            console.log(e.message);
        }
    };

    const handleSelection = (song, index) => {
        setCurrentSong({
            song: song.name,
            artist: song.artists[0].name,
            image: song.album.images[0].url,
        });
        audio.src = song.preview_url;
        audio.play();
        setToggle(false);
        setIndex(index);
        setCurrentType('artist');
        if (song.preview_url === null) alert(' \n \n No Preview URL For This Song \n \n Click The Link Icon To Visit The Song ');
    };

    const handleLike = (item) => {
        const isLiked = likedSongs.some((song) => song.id === item.id);

        if (isLiked) {
            setLikedSongs(likedSongs.filter((song) => song.id !== item.id));
        } else {
            setLikedSongs([...likedSongs, item]);
        }
    };

    const timeConverter = (time) => {
        const totalSeconds = Math.floor(time / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const paddedSeconds = seconds.toString().padStart(2, '0');

        return `${minutes}:${paddedSeconds}`;
    };

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    useEffect(() => {
        getArtist();
        getArtistTracks();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken, id]);

    return (
        <div className="overflow-y-auto down flex flex-col my-4 pt-4 px-4 gap-12 max-425:gap-8 max-375:gap-8 h-full w-full ">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    <ClipLoader loading={true} size={60} color={'white'} />
                </div>
            ) : (
                <>
                    <div className="px-4">
                        <Navbar />
                    </div>
                    <div className="flex flex-col gap-12">
                        <section className="flex flex-row w-full pl-8 max-2560:gap-16 max-1440:gap-16 max-1280:gap-8 max-1170:gap-12 max-1024:gap-12 max-768:gap-8 max-640:gap-1 max-640:flex-col max-425:flex-col max-425:items-start max-425:gap-1 max-375:flex-col max-375:items-start max-375:gap-1">
                            {artist && artist.images && artist.images[1] && (
                                <div className="transition-all ease-in hover:opacity-70">
                                    <LazyLoadImage
                                        effect="blur"
                                        src={artist.images[1].url}
                                        alt=""
                                        className="transition-all ease-in rounded-[10px] hover:opacity-70 max-2560:w-[250px] max-2560:h-[250px] max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[160px] max-1024:h-[160px] max-768:w-[180px] max-640:hidden max-425:hidden max-375:hidden"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col items-start justify-end  max-2560:gap-8 max-1440:gap-8 max-1170:gap-4 max-1280:gap-6 max-1024:gap-4 max-768:gap-6  max-640:gap-6 max-425:items-start max-425:gap-4 max-375:items-start max-375:gap-4">
                                <h4 className="text-white max-425:hidden max-375:hidden">Artist</h4>

                                <h1 className="text-white text-[25px] font-bold">{artist.name}</h1>

                                <div className="flex flex-row gap-4 items-center justify-center">
                                    <p className="text-neutral-400 text-[18px]"> &bull; &nbsp; {artist && artist.followers && formatNumberWithCommas(artist.followers.total)} &nbsp; Followers</p>
                                </div>
                            </div>
                        </section>
                        <hr className="w-full" />
                        <section className="flex flex-col mb-4 gap-12 overflow-hidden max-2560:gap-14 max-1440:gap-14">
                            {tracks.map((item, index) => (
                                <div className="flex flex-col gap-12" key={index}>
                                    <div className="flex flex-row gap-8 w-[90%] h-full pl-8 max-425:flex-col max-640:flex-col max-375:flex-col ">
                                        <div className=" max-640:hidden max-425:hidden max-375:hidden">
                                            <LazyLoadImage effect="blur" width={80} height={80} src={item.album.images[0].url} alt="" className=" rounded-full" />
                                        </div>

                                        <div className=" flex flex-row items-center justify-between w-full gap-2 max-425:flex-col max-425:items-start max-425:gap-8 max-375:items-start max-375:gap-8 max-375:flex-col">
                                            <div className="flex flex-col gap-2">
                                                <p className="text-white text-lg w-full cursor-pointer hover:underline" onClick={() => handleSelection(item, index)}>
                                                    {item.name}
                                                </p>
                                                <Link to={`/artist/${item.artists[0].id}`}>
                                                    <p className="text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline">{item.artists[0].name}</p>
                                                </Link>
                                            </div>

                                            <div className="flex flex-col gap-2 justify-center items-center">
                                                <p className="text-white text-md ">{timeConverter(item.duration_ms)}</p>
                                                <a href={item.external_urls.spotify} target="_blank">
                                                    <p className="text-[15px] text-neutral-400 hover:underline">
                                                        <CiLink className="w-[25px] h-[25px] hover:scale-125" />
                                                    </p>
                                                </a>
                                                <div className="text-neutral-400 cursor-pointer " onClick={() => handleLike(item)}>
                                                    {likedSongs.some((song) => song.id === item.id) ? (
                                                        <FaHeart className="w-[20px] h-[20px] hover:scale-125 transition-all ease-in" />
                                                    ) : (
                                                        <FaRegHeart className="w-[20px] h-[20px] hover:scale-125 transition-all ease-in" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[90%] bg-[#a3a3a377] h-[0.5px] ">-</div>
                                </div>
                            ))}
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default DisplayArtist;
