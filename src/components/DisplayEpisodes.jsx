import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AccessContext } from '../Contexts/AcessContext';
import { ClipLoader } from 'react-spinners';

const DisplayEpisodes = () => {
    const { id } = useParams();

    const { accessToken } = useContext(AccessContext);

    const [details, setDetails] = useState([]);
    const [main, setMain] = useState([]);
    const [loading, setLoading] = useState(true);

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
            const url = `https://api.spotify.com/v1/shows/${id}/episodes`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setDetails(data.items);
            console.log(response.data.items);
        } catch (e) {
            console.log('THE DETAILS FETCHING WAS FAILED');
        }
    };

    useEffect(() => {
        getDetails();
        getPodcast();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken]);

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
                                className=" rounded-[10px] hover:opacity-70 max-2560:w-[230px] max-2560:h-[230px] max-1440:w-[210px] max-1440:h-[210px] max-1280:h-[150px] max-1280:w-[150px] max-1170:w-[130px] max-1170:h-[130px] max-1024:w-[130px] max-1024:h-[130px] max-768:w-[150px] max-640:hidden max-425:hidden max-375:hidden "
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
                                <div className="flex flex-row pl-4 gap-12 w-full">
                                    <img src={assets.img1} alt="" className="w-[80px] h-[80px] " />
                                    <div className="flex flex-col gap-4 w-full">
                                        <h1 className="text-white text-lg">Episode Number 1 : Name of the Episode</h1>
                                        <p className="text-neutral-400 truncate w-[50%] text-sm">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque cum aperiam nostrum quasi rerum, ex magnam accusamus tempore omnis totam explicabo ipsa
                                            amet error quia dolorum nihil similique sit iure.
                                        </p>
                                        <p className="text-white text-sm">2024-06-13</p>
                                    </div>
                                </div>
                                <hr className="w-[70%] custom-color" />
                            </>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};

export default DisplayEpisodes;
