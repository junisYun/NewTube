import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Detail from './components/detail/Detail';
import Search from './components/search/Search';
import VideoList from './components/video_list/Video_list';

function App({ newtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = (query) => {
    newtube //
      .search(query)
      .then((items) => {
        setVideos(items);
        setSelectedVideo(null);
      });
  };
  useEffect(() => {
    newtube //
      .mostPopular()
      .then((items) => setVideos(items));
  }, []);
  const handleClickVideo = (video) => {
    setSelectedVideo(video);
  };
  console.log(videos);
  console.log(selectedVideo);
  return (
    <>
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo ? (
          <div className={styles.detail}>
            <Detail video={selectedVideo} videoURL={selectedVideo} />
          </div>
        ) : null}

        <div className={styles.list}>
          <VideoList videos={videos} handleClickVideo={handleClickVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </>
  );
}

export default App;
