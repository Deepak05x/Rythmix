import React, { useState } from 'react';
import { useEffect } from 'react';
import { CiLink } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const ExplorePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col w-full mb-1 h-[100%] gap-16 overflow-y-auto down max-1280:pr-0">
            {loading ? (
                <div className="flex items-center justify-center h-full w-full overflow-hidden">
                    <ClipLoader loading={loading} size={60} color={'white'} />
                </div>
            ) : (
                <>
                    <div className="flex flex-row w-full gap-8 max-1280:gap-4 max-1024:gap-6 max-425:gap-3 max-425:text-[15px] max-375:text-[12px] max-375:gap-2">
                        <Link to={'/'}>
                            <button className="bg-[#ffffff1d] text-white py-1 px-3 rounded-full hover:scale-105 transition-all ease-in">All</button>
                        </Link>
                        <Link to={'/music'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Music</button>
                        </Link>
                        <Link to={'/podcast'}>
                            <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hover:scale-105 transition-all ease-in">Podcasts</button>
                        </Link>
                        <button className="bg-[#ffffff1d] py-1 px-3 rounded-full text-white hidden max-1024:flex max-768:flex max-640:flex max-425:flex max-375:flex hover:scale-105 transition-all ease-in">
                            Library
                        </button>
                    </div>
                    <div className="text-white flex flex-col items-start gap-8">
                        <h1 className="font-semibold text-2xl"> Welcome To Rythmix...</h1>
                        <h1 className="text-lg text-neutral-400 leading-8 ">
                            The music streaming app I created just for music lovers like you. Think of it as your new musical sidekick, kind of like Spotify but with my own personal touch. When I was
                            creating Rythmix, I learned a lot of cool stuff and poured all that knowledge into making this app as awesome as possible.
                        </h1>
                    </div>
                    <div className="text-white flex flex-col items-start gap-8">
                        <h1 className="font-semibold text-2xl"> Preview Url</h1>
                        <h1 className="text-lg text-neutral-400 leading-8">
                            Please note that within our project, only the preview URL of each song is available. This is because of Spotify's policy, which restricts the use of full songs outside
                            their platform.The previews still give you a good taste of the music and allow you to explore and discover new songs while respecting the rights of the original
                            creators.But.. there are some songs which doesn't have preview Url and if you click that song with no preview Url , you will get a alert message to let you know about it.
                        </h1>
                    </div>
                    <div className="text-white flex flex-col items-start gap-8">
                        <h1 className="font-semibold text-2xl"> Link</h1>

                        <h1 className="text-md text-neutral-400 leading-8 text-lg">
                            <CiLink className="w-[50px] h-[50px]" />
                            To listen to the full song, simply click on the link icon above. This icon will direct you to Spotify, where you can enjoy the entire track. Spotify offers a seamless
                            listening experience with high-quality audio and an extensive music library. Whether you're discovering new artists or revisiting old favorites, the convenience of
                            streaming music on Spotify makes it easy to access your preferred tracks anytime, anywhere. Just click the link and immerse yourself in the music!
                        </h1>
                    </div>
                </>
            )}
        </div>
    );
};

export default ExplorePage;
