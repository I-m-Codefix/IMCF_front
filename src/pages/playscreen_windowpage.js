import React, { useLayoutEffect  } from "react";
import { Player, ControlBar } from "video-react";
import HLSSource from "../components/HLSSource"
import VideoToolbar from "../components/VideoToolbar";

import '../../node_modules/video-react/dist/video-react.css'; // import css

export default function Playscreen_windowpage() {
    return (
        <div>
            <VideoToolbar />
        </div>
        // <div>
        //     <Player>
        //         <ControlBar>

        //         </ControlBar>
        //         <HLSSource
        //             isVideoChild
        //             src="https://d3uo0zm3pt2hib.cloudfront.net/streaming/video-ott.m3u8"
        //         />
        //     </Player>
        // </div>
    );
}