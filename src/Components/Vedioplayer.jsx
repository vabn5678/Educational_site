import React, { useRef } from "react";
import './Vedioplayer.css';
import video from '../assets/video.mp4';
const VedioPlayer = ({ playstate, setplaystate }) => {
    const player = useRef(null);

    const closevideo = (e) => {
        if (e.target === player.current) {
            setplaystate(false);
        }
    }
    return (

        <div className={`video-player ${playstate ? "" : "hide"} `} ref={player} onClick={closevideo}>
            <video src={video} autoPlay muted controls></video>
        </div>

    )
}

export default VedioPlayer;