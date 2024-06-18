import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { assets } from '../assets/assets';
import { AccessContext } from '../Contexts/AcessContext';
import { CiLink } from 'react-icons/ci';
import { ClipLoader } from 'react-spinners';

const DisplayPlaylist = ({ setCurrentSong, audio, setToggle }) => {
    const { id } = useParams();

    const [playlist, setPlaylist] = useState({});
    const [song, setSong] = useState([]);
    const [artist, setArtist] = useState({});
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const { accessToken } = useContext(AccessContext);

    const getPlaylist = async () => {
        try {
            const url = `https://api.spotify.com/v1/playlists/${id}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setPlaylist(data);
            setSong(data.tracks.items);
            setArtist(data.followers);
            setList(data.tracks.items);
        } catch (e) {
            console.log('THE SINGLE PLAYLIST FETCHING WAS FAILED');
            console.log(e.message);
        }
    };

    useEffect(() => {
        getPlaylist();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken]);

    let count = 0;
    song.map(() => count++);
    const arrayLength = count;

    const followerConverter = (count) => {
        if (count > 1000000) return `${Math.floor(count / 1000000)}M`;
        else if (count > 10000) return `${Math.floor(count / 10000)}K`;
    };

    const timeConverter = (time) => {
        const totalSeconds = Math.floor(time / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const paddedSeconds = seconds.toString().padStart(2, '0');
        return `${minutes}:${paddedSeconds}`;
    };

    const handleSelection = (song) => {
        setCurrentSong({
            song: song.track.name,
            artist: song.track.artists[0].name,
            image: song.track.album.images[0].url,
        });
        audio.src = song.track.preview_url;
        audio.play();
        setToggle(false);
        if (song.track.preview_url === null) alert(' \n \n No Preview URL For This Song \n \n Click The Link Icon To Visit The Song ');
    };

    return (
        <div className="overflow-y-auto flex flex-col gap-12 max-425:gap-8 max-375:gap-8 w-full h-full">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    <ClipLoader loading={true} size={60} color={'white'} />
                </div>
            ) : (
                <>
                    <section className="flex flex-row w-full max-2560:gap-16 max-1440:gap-16 max-1280:gap-8 max-1170:gap-12 max-1024:gap-12 max-768:gap-8 max-640:gap-8 max-425:flex-col max-425:items-center max-425:gap-8 max-375:flex-col max-375:items-center max-375:gap-4 ">
                        {playlist && playlist.images && playlist.images[0] && (
                            <img
                                src={playlist.images[0].url}
                                alt=""
                                className=" max-2560:w-[250px] max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[160px] max-1024:h-[160px] max-768:w-[180px] max-640:hidden max-425:hidden max-375:hidden "
                            />
                        )}
                        <div className="flex flex-col items-start justify-end  max-2560:gap-12 max-1440:gap-12 max-1170:gap-6 max-1280:gap-8 max-1024:gap-8 max-768:gap-6 max-640:gap-6 max-425:items-start max-425:gap-6 max-375:items-start max-375:gap-4">
                            <h4 className="text-white max-425:hidden max-375:hidden">Album</h4>

                            <div className="flex flex-col gap-2 max-640:flex-col max-640:gap-1 max-425:flex-col max-425:gap-1 max-375:flex-col max-375:gap-1">
                                <h1 className="text-white text-[25px] font-bold">{playlist.name}</h1>
                                <p className="text-neutral-400">{playlist.description}</p>
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center">
                                <p className="text-white max-1280:text-sm ">{arrayLength} Songs</p>
                                <p className="text-neutral-400"> &bull; {followerConverter(artist.total)} Followers</p>
                            </div>
                        </div>
                    </section>
                    <hr className="w-full" />
                    <section className="flex flex-col mb-4 gap-8 overflow-x-hidden down max-2560:gap-14 max-1440:gap-14 max-1280:gap-12  max-1170:gap-12 max-1024:gap-12 max-768:gap-12 max-640:gap-12 max-425:gap-12">
                        <div className=" grid heading-col justify-between max-2560:px-2 max-1440:px-2 max-1170:px-2 max-1024:px-2 max-1440:gap-16 max-640:hidden max-425:hidden max-375:hidden">
                            <p className="text-neutral-400 font-semibold text-[20px]">Title</p>
                            <p className="text-neutral-400 font-semibold text-[20px]">Artist</p>
                            <img
                                src={assets.clock_icon}
                                alt=""
                                className="max-1440:w-[20px] max-1440:h-[20px] max-1280:w-[20px] max-1170:w-[20px] max-1024:w-[20px] max-768:w-[20px] max-640:w-[20px] max-2560:w-[20px]"
                            />
                        </div>
                        {list.map((item, index) => (
                            <div
                                className="grid max-2560:px-2 max-1440:px-2 w-full cursor-pointer justify-between normal-col max-1280:px-2 max-1170:px-2 max-1024:px-2 max-768:px-1 max-640:px-1 max-640:flex max-640:flex-col  max-425:flex max-425:flex-col  max-375:flex max-375:flex-col max-375:items-start"
                                key={index}
                            >
                                <div className="flex flex-row gap-4">
                                    <p onClick={() => handleSelection(item)} className="text-white text-start max-1440:text-[16px] font-light hover:underline">
                                        {item.track.name}
                                    </p>
                                    <a href={item.track.external_urls.spotify} target="_blank">
                                        <p className="text-[15px] text-neutral-400 hover:underline">
                                            <CiLink className="w-[20px] h-[20px] hover:scale-125" />
                                        </p>
                                    </a>
                                </div>
                                <p className="text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline">{item.track.artists[0].name}</p>
                                <p className="text-neutral-400 max-425:hidden max-375:hidden max-640:hidden">{timeConverter(item.track.duration_ms)}</p>
                            </div>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};

export default DisplayPlaylist;
