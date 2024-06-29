import { assets } from '../assets/assets';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AccessContext } from '../Contexts/AcessContext';
import { CiLink } from 'react-icons/ci';
import { ClipLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from './Navbar';

const DisplayAlbum = ({ setCurrentSong, audio, setToggle, setCurrentType, album, setAlbum, mainImageAlbum, setMainImageAlbum, setIndex }) => {
    const { accessToken } = useContext(AccessContext);

    const [albumContent, setAlbumContent] = useState({});
    const [artist, setArtist] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const getSingleAlbum = async () => {
        try {
            const url = `https://api.spotify.com/v1/albums/${id}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = response.data;
            setAlbum(data.tracks.items);
            setMainImageAlbum(data.images);
            setAlbumContent(data);
            setArtist(data.artists);
        } catch (e) {
            console.log('THE SINGLE ALBUM FETCHING WAS FAILED');
            console.log(e.message);
        }
    };

    useEffect(() => {
        getSingleAlbum();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [accessToken]);

    let count = 0;
    album.map(() => count++);
    const arrayLength = count;

    const timeConverter = (time) => {
        const totalSeconds = Math.floor(time / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const paddedSeconds = seconds.toString().padStart(2, '0');
        return `${minutes}:${paddedSeconds}`;
    };

    const handleSelection = async (song, index) => {
        setCurrentSong({
            song: song.name,
            artist: song.artists[0].name,
            image: mainImageAlbum[0].url,
        });
        audio.src = song.preview_url;
        audio.play();
        setToggle(false);
        setCurrentType('album');
        setIndex(index);
        if (song.preview_url === null) alert(' \n \n No Preview URL For This Song \n \n Click The Link Icon To Visit The Song ');
    };

    return (
        <div className="overflow-y-auto flex flex-col gap-12 max-425:gap-8 max-375:gap-8 relative h-full w-full">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    <ClipLoader color={'white'} loading={true} size={60} />
                </div>
            ) : (
                <>
                    <Navbar />
                    <section className="flex flex-row w-full pl-8 max-2560:gap-16 max-1440:gap-16 max-1280:gap-8 max-1170:gap-12 max-1024:gap-12 max-768:gap-8 max-640:gap-4 max-640:flex-col max-425:flex-col max-425:items-start max-425:gap-8 max-375:flex-col max-375:items-start max-375:gap-4 ">
                        {mainImageAlbum && mainImageAlbum[0] && mainImageAlbum[0].url && (
                            <LazyLoadImage
                                effect="blur"
                                src={mainImageAlbum[0].url}
                                alt=""
                                className=" transition-all ease-in rounded-[10px] hover:opacity-70 max-2560:w-[250px] max-2560:h-[250px] max-1440:w-[230px] max-1440:h-[230px] max-1280:h-[180px] max-1280:w-[180px] max-1170:w-[160px] max-1170:h-[160px] max-1024:w-[160px] max-1024:h-[160px] max-768:w-[180px] max-640:hidden max-425:hidden max-375:hidden "
                            />
                        )}
                        <div className="flex flex-col items-start justify-end  max-2560:gap-8 max-1440:gap-8 max-1170:gap-4 max-1280:gap-6 max-1024:gap-4 max-768:gap-6  max-640:gap-6 max-425:items-start max-425:gap-4 max-375:items-start max-375:gap-4">
                            <h4 className="text-white max-425:hidden max-375:hidden">Album</h4>
                            <h1 className="text-white text-[25px] font-bold">{albumContent.name}</h1>
                            <div className="flex flex-row gap-4 max-640:flex-col max-640:gap-1 max-425:flex-col max-425:gap-1 max-375:flex-col max-375:gap-1">
                                {artist.map((item, index) => (
                                    <Link to={`/artist/${item.id}`} key={index}>
                                        <p className="text-neutral-400 hover:scale-110">&bull; {item.name}</p>
                                    </Link>
                                ))}
                            </div>
                            <p className="text-white max-1280:text-sm max-425:hidden max-375:hidden">{arrayLength} Songs</p>
                        </div>
                    </section>
                    <hr className="w-full" />
                    <section className="flex flex-col mb-4 gap-12 overflow-x-hidden down max-2560:gap-14 max-1440:gap-14">
                        {album.map((item, index) => (
                            <div className="flex flex-col gap-12" key={index}>
                                <div className="flex flex-row gap-8 w-[90%] h-full pl-8 max-425:flex-col max-640:flex-col max-375:flex-col ">
                                    <div className="max-640:hidden max-425:hidden max-375:hidden">
                                        <LazyLoadImage effect="blur" src={mainImageAlbum[0].url} alt="" width={80} height={80} className="rounded-full" />
                                    </div>

                                    <div className=" flex flex-row items-center justify-between w-full gap-2 max-640:flex-col max-640:items-start max-640:gap-8 max-425:flex-col max-425:items-start max-425:gap-8 max-375:items-start max-375:gap-8 max-375:flex-col">
                                        <div className="flex flex-col gap-2">
                                            <p onClick={() => handleSelection(item, index)} className="text-white text-lg w-full cursor-pointer hover:underline">
                                                {item.name}
                                            </p>
                                            <Link to={`/artist/${item.artists[0].id}`}>
                                                <p className="text-neutral-400 max-1440:text-[15px] max-2000:text-[15px] hover:underline">{item.artists[0].name}</p>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col gap-2 justify-center">
                                            <p className="text-white text-md ">{timeConverter(item.duration_ms)}</p>
                                            <a href={item.external_urls.spotify} target="_blank">
                                                <p className="text-[15px] text-neutral-400 hover:underline">
                                                    <CiLink className="w-[25px] h-[25px] hover:scale-125" />
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[90%] bg-[#a3a3a377] h-[0.5px] ">-</div>
                            </div>
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};

export default DisplayAlbum;