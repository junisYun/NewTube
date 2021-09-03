import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import VideoList from './components/video_list/Video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBsF44mU3n-gkwDQTUVEBsPJ6v8E-78nkE', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.items);
          setVideos(data.items);
        })
        .catch((error) => console.log('error', error));
    };
    fetchEvent();
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
