import React from "react";
import ReactPlayer from "react-player";
import PlayLayout from "../layouts/playLayout";
import { useParams } from "react-router";
import { loadMovieData } from "../apis/api/movie";
import { useCookies } from 'react-cookie';

import "../styles/Pages/playscreen.scss";
import { useQuery } from "react-query";

export default function Playscreen_windowpage() {
    const [cookies] = useCookies(['userInfo']);
    const token = cookies.userInfo.token;
    const movieNum = useParams();
    console.log("영화 번호 : ", movieNum.movieId);
    const { data, isLoading, error } = useQuery("moive", () => {
        loadMovieData(token);
        console.log(data);
    });

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    } else {
        const playURL = data.result.playUri;
        return (
            <PlayLayout>
                <div className="video_wrapper">
                    <ReactPlayer
                        className="react-player"
                        url={playURL}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>
            </PlayLayout>
        );
    }
}