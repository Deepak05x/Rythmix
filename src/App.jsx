import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import axios from "axios";
import AlbumPage from "./pages/AlbumPage";

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
        <TokenContext.Provider value={accessToken}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/artist/:id" element={<ArtistPage/>} />
                <Route path="/albums/:id" element={<AlbumPage/>}/>
            </Routes> 
        </TokenContext.Provider>
    );
};

export default App;
