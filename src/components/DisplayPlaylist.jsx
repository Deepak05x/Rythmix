import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AccessContext } from '../Contexts/AcessContext';
import { CiLink } from 'react-icons/ci';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const DisplayPlaylist = ({ setCurrentSong, audio, setToggle, list, setList, setCurrentType }) => {
    const { id } = useParams();

    const [playlist, setPlaylist] = useState({});
    const [loading, setLoading] = useState(true);
    const [artistFollowers, setArtistFollowers] = useState({});

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
            setArtistFollowers(data.followers);
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
    list.map(() => count++);
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
        setCurrentType('playlist');
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
                                className=" transition-all ease-in rounded-[10px] hover:opacity-70 max-2560:w-[250px] max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[160px] max-1024:h-[160px] max-768:w-[180px] max-640:hidden max-425:hidden max-375:hidden "
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
                                <p className="text-neutral-400"> &bull; {followerConverter(artistFollowers.total)} Followers</p>
                            </div>
                        </div>
                    </section>
                    <hr className="w-full" />
                    <section className="flex flex-col mb-4 gap-12 overflow-x-hidden down max-2560:gap-14 max-1440:gap-14">
                        {list.map((item, index) => (
                            <>
                                <div className="flex flex-row gap-8 w-[80%] max-375:flex-col max-375:gap-4 h-full px-4" key={index}>
                                    <img src={item.track.album.images[0].url} alt="" className="w-[80px] h-[80px] rounded-full max-640:hidden max-425:hidden max-375:hidden" />
                                    <div className=" flex flex-row items-center justify-between w-full gap-2" key={index}>
                                        <div className=" flex flex-col gap-2" key={index}>
                                            <p onClick={() => handleSelection(item)} className="text-white text-lg w-full cursor-pointer hover:underline">
                                                {item.track.name}
                                            </p>
                                            <Link to={`/artist/${item.track.artists[0].id}`}>
                                                <p className="text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline">{item.track.artists[0].name}</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 justify-center">
                                        <p className="text-white text-md">{timeConverter(item.track.duration_ms)}</p>
                                        <a href={item.track.external_urls.spotify} target="_blank">
                                            <p className="text-[15px] text-neutral-400 hover:underline">
                                                <CiLink className="w-[25px] h-[25px] hover:scale-125" />
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-[90%] bg-[#a3a3a377] h-[0.5px] ">-</div>
                            </>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};

export default DisplayPlaylist;
