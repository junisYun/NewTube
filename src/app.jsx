import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import VideoList from './components/video_list/Video_list';

function App({ newtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    newtube //
      .search(query)
      .then((items) => setVideos(items));
  };
  useEffect(() => {
    newtube //
      .mostPopular()
      .then((items) => setVideos(items));
  }, []);

  return (
    <>
      <Search onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
