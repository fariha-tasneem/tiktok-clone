import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video( {url, channel, description, song, likes, messages, shares}) {

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);

    const handleVideoPress = () => {
        //if video pllaying --> pause
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        //otherwise --> play
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return <div className="video">

        <video 
        onClick= {handleVideoPress}
        className="video__player"
        loop
        ref = {videoRef}
        src ={url}></video>

        <VideoFooter channel={'dogChannel'} 
        description={'Dog'} song={'someSong'}/>
        <VideoSidebar likes ={likes} messages={messages}
        shares = {shares} />
            
    </div>;
    
}


export default Video
