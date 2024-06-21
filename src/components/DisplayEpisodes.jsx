import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccessContext } from '../Contexts/AcessContext';
import { ClipLoader } from 'react-spinners';

const DisplayEpisodes = ({ setToggle, audio, setCurrentSong }) => {
    const { id } = useParams();

    const { accessToken } = useContext(AccessContext);

    const [details, setDetails] = useState([]);
    const [main, setMain] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(null);
    const [limit, setLimit] = useState(20);

    const getPodcast = async () => {
        try {
            const url = `https://api.spotify.com/v1/shows/${id}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setMain(data);
        } catch (e) {
            console.log('THE PODCAST FETCHING WAS FAILED');
        }
    };

    const getDetails = async () => {
        try {
            const url = `https://api.spotify.com/v1/shows/${id}/episodes?limit=${limit}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setDetails(data.items);
            console.log(response.data);
            setTotal(data.total);
        } catch (e) {
            console.log('THE DETAILS FETCHING WAS FAILED');
        }
    };

    const handleSelection = (song) => {
        setCurrentSong({
            song: song.name,
            artist: song.type,
            image: song.images[0].url,
        });
        audio.src = song.audio_preview_url;
        audio.play();
        setToggle(false);
    };

    const getMore = () => {
        const newLimit = limit + 10;
        if (newLimit >= total) {
            setLimit(total);
        } else {
            setLimit(newLimit);
        }
    };

    const getLess = () => {
        const newLimit = limit - 10;
        if (newLimit <= total) {
            setLimit(20);
        } else {
            setLimit(newLimit);
        }
    };

    useEffect(() => {
        getPodcast();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken]);

    useEffect(() => {
        getDetails();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken, limit]);

    return (
        <div className="overflow-y-auto flex flex-col gap-12 max-425:gap-8 max-375:gap-8 h-full w-full">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full">
                    <ClipLoader color="white" loading={true} size={60} />
                </div>
            ) : (
                <>
                    <section className="flex flex-row w-full max-2560:gap-16 max-1440:gap-16 max-1280:gap-8 max-1170:gap-12 max-1024:gap-12 max-768:gap-8 max-640:gap-8 max-425:flex-col max-425:items-start max-425:gap-8 max-375:flex-col max-375:items-start max-375:gap-4">
                        {main && main.images[0] && main.images[0].url && (
                            <img
                                src={main.images[0].url}
                                alt=""
                                className=" transition-all ease-in rounded-[10px] hover:opacity-70 max-2560:w-[230px] max-2560:h-[230px] max-1440:w-[210px] max-1440:h-[210px] max-1280:h-[150px] max-1280:w-[150px] max-1170:w-[130px] max-1170:h-[130px] max-1024:w-[130px] max-1024:h-[130px] max-768:w-[150px] max-640:hidden max-425:hidden max-375:hidden "
                            />
                        )}

                        <div className="flex flex-col items-start justify-end  max-2560:gap-8 max-1440:gap-8 max-1170:gap-4 max-1280:gap-6 max-1024:gap-8 max-768:gap-4 max-640:gap-6 max-425:items-start max-425:gap-4 max-375:items-start max-375:gap-4">
                            <h4 className="text-white max-425:hidden max-375:hidden">Podcast</h4>
                            <h1 className="text-white text-[25px] font-bold">{main.name}</h1>
                            <p className="flex flex-row gap-4 max-640:flex-col text-neutral-400  max-640:gap-1 max-425:flex-col max-425:gap-1 max-375:flex-col max-375:gap-1">{main.publisher}</p>
                        </div>
                    </section>
                    <hr className="w-full" />
                    <section className="flex flex-col mb-4 gap-12 overflow-x-hidden down max-2560:gap-14 max-1440:gap-14">
                        {details.map((item, index) => (
                            <>
                                <div className="flex flex-row pl-2 gap-12 w-full" key={index}>
                                    <img
                                        src={item.images[0].url}
                                        alt=""
                                        className=" cursor-pointer w-[80px] h-[80px] max-640:hidden max-425:hidden  max-375:hidden"
                                        onClick={() => handleSelection(item)}
                                    />
                                    <div className="flex flex-col gap-4 w-full">
                                        <h1 className="text-white text-lg w-full cursor-pointer hover:underline" onClick={() => handleSelection(item)}>
                                            {item.name}
                                        </h1>
                                        <p className="text-neutral-400 truncate w-[90%] text-sm">{item.description}</p>
                                        <p className="text-white text-sm">{item.release_date}</p>
                                    </div>
                                </div>
                                <div className="w-[90%] bg-[#a3a3a377] h-[0.5px] ">-</div>
                            </>
                        ))}
                        {limit === total ? (
                            <h1 className="text-neutral-400 hover:underline cursor-pointer" onClick={() => getLess()}>
                                Load Less
                            </h1>
                        ) : (
                            <h1 className="text-neutral-400 hover:underline cursor-pointer" onClick={() => getMore()}>
                                Load More
                            </h1>
                        )}
                    </section>
                </>
            )}
        </div>
    );
};

export default DisplayEpisodes;
