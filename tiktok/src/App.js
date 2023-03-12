import logo from './logo.svg';
import './App.css';
import Video from "./Video";
import React, { useEffect, useState } from 'react';
import axios from "./axios";
//import React, { useRef, useState } from 'react';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    async function fetchPosts() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []); 



  return (
    <div className="app">
      

    <div className="app__videos">
      {videos.map(({url, channel, description, song, likes, messages, shares}) => (
        <Video
        url = {url}
        channel = {channel}
        song = {song}
        likes = {likes}
        messages = {messages}
        shares = {shares}
        
        />
      ))}
      
      
      
    </div>

      {/*app container */}
        {/* videos */}
      
    </div>
  );
}

export default App;
