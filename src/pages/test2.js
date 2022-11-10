import React from 'react';
import TestLayout from "../layouts/TestLayout";
import { Player, ControlBar } from "video-react";
import HLSSource from "../components/HLSSource";

function Test2() {
  return (
    <TestLayout>
      <Player muted>
        <HLSSource 
          isVideoChild
          src="https://d3uo0zm3pt2hib.cloudfront.net/streaming/video-ott.m3u8"
        />
        <ControlBar autoHide={false} className="my-class" />
      </Player>
    </TestLayout>
  );
}

export default Test2;