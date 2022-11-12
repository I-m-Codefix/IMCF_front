import React from "react";
import ReactPlayer from "react-player";
import PlayLayout from "../layouts/playLayout";
import { useParams } from "react-router";

import "../styles/Pages/playscreen.scss";

export default function Playscreen_windowpage() {

    const movieNum = useParams();
    console.log("영화 번호 : ", movieNum.movieId);

    return (
        <PlayLayout>
            <div className="video_wrapper">
                <ReactPlayer
                    className="react-player"
                    url="https://d3uo0zm3pt2hib.cloudfront.net/streaming/video-ott.m3u8"
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </div>
        </PlayLayout>
    );
}