import React, { useEffect } from 'react';
import Hls from 'hls.js';

export default function HLSSource(props) {
    const hls = new Hls();

    useEffect(() => {
        const { src, video } = props;

        if (Hls.isSupported()) {
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.muted = true;
                video.play();
            });
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        }
    }, []);

    return (
        <source
            src={props.src}
            type={props.type || 'application/x-mpegURL'}
            withcredentials="true"
        />
    );
}