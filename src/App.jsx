import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import DisplayAlbum from "./components/DisplayAlbum";
import DisplayArtist from "./components/DisplayArtist";
import DisplayHome from "./components/DisplayHome";
import DisplayPlaylist from "./components/DisplayPlaylist";
import Navbar from "./components/Navbar";
import { assets } from "./assets/assets";

export const TokenContext = createContext();

const App = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    const [accessToken, setAccessToken] = useState("");
    const [currentSong, setCurrentSong] = useState({
        song: 'Sweater Weather',
        artist: 'Neighboor',
        image: `${assets.img1}`,
        id: ''
})
    const [audio] = useState(new Audio());
    


    const getAccessToken = async () => {
        const url = "https://accounts.spotify.com/api/token";
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append("client_id", clientId);
        params.append("client_secret", clientSecret);

        try {
            const response = await axios.post(url, params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            setAccessToken(response.data.access_token);
            console.log("Newly Set Access Token:", response.data.access_token); 
            const expiresIn = response.data.expires_in;
            setTimeout(getAccessToken, (expiresIn - 300) * 1000);
        } catch (e) {
            console.error("Error fetching access token:", e.message);
        }
    };

    const fetchAndPlaySong = async()=>{

    }


    useEffect(() => {
        getAccessToken();
    }, []);

    

    return (
        <>
            <div className='px-2 py-2  w-full h-[100vh] flex flex-col gap-0.5'>
                <div className='flex flex-row gap-2 h-[90%]  '> 
                    <Sidebar /> 
                    <div className='w-[75%] bg-[#121212] rounded flex flex-col gap-12 pt-4 px-4 justify-flex-start max-1280:w-[80%]  max-1024:w-full max-1024:h-[89vh] max-768:w-full max-768:h-[90vh] max-640:w-full max-425:w-full max-425:gap-8 max-375:w-full max-375:gap-8'>
                        <Navbar />
                        <TokenContext.Provider value={accessToken}>
                            <Routes>
                                <Route path="/" element={<DisplayHome />} />
                                <Route path="/playlist/:id" element={<DisplayPlaylist setCurrentSong={setCurrentSong} audio={audio}/>} />
                                <Route path="/albums/:id" element={<DisplayAlbum setCurrentSong={setCurrentSong} currentSong={currentSong} audio={audio}/>} />
                                <Route path="/artist/:id" element={<DisplayArtist setCurrentSong={setCurrentSong} audio={audio} />} />
                            </Routes> 
                        </TokenContext.Provider>
                    </div>
                </div> 
                <div className='h-[9.5%] max-768:h-[9%] max-640:h-[10%]'>
                    <MusicPlayer currentSong={currentSong}  />
                </div>
            </div>
        </>
        
    );
};

export default App;
