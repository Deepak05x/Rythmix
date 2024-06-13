import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import Display from "./components/HomePage/Display";
import Artist from "./components/ArtistPage/Artist";
import Album from './components/AlbumPage/Album';
import Playlist from './components/PlaylistPage/Playlist'

export const TokenContext = createContext();

const App = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

    const [accessToken, setAccessToken] = useState("");


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

    useEffect(() => {
        getAccessToken();
    }, []);

    

    return (
        <>
            <div className='px-2 py-2'>
                <div className='flex flex-row gap-2 max-2560:h-[90vh] max-1440:h-[87.5vh] max-1280:h-[88vh] max-1170:h-[88vh] exact-1024:h-[88vh] max-1024:h-[88vh] max-768:h-[90vh] max-640:h-[90vh] max-425:h-[90vh] max-375:h-[89vh] max-2000:h-[90vh]'> 
                    <Sidebar /> 
                    <TokenContext.Provider value={accessToken}>
                    <Routes>
                        <Route path="/" element={<Display />} />
                        <Route path="/playlist/:id" element={<Playlist/>} />
                        <Route path="/albums/:id" element={<Album/>}/>
                        <Route path="/artist/:id" element={<Artist />} />
                    </Routes> 
                    </TokenContext.Provider>
                </div> 
                <div className=' max-2560:h-[8vh] max-1440:h-[10vh] max-1280:h-[9vh] max-1170:h-[9vh] exact-1024:h-[9vh] max-1024:h-[9vh] max-768:h-[8vh] max-640:h-[8vh] max-425:h-[8vh] max-375:h-[9vh] max-2000:h-[8vh]'>
                    <MusicPlayer />
                </div>
            </div>
        </>
        
    );
};

export default App;
