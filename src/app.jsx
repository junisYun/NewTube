import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Detail from './components/detail/Detail';
import Search from './components/search/Search';
import VideoList from './components/video_list/Video_list';

function App({ newtube }) {
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    newtube //
      .mostPopular()
      .then((items) => setVideos(items));
  }, [newtube]);

  const search = (query) => {
    newtube //
      .search(query)
      .then((items) => {
        setVideos(items);
        setSelectedVideo(null);
      });
  };

  const getComments = (videoId) => {
    newtube //
      .comment(videoId)
      .then((items) => {
        setComments(items);
        console.log('comment', items);
      });
  };
  const mainPage = () => {
    newtube //
      .mostPopular()
      .then((items) => {
        setVideos(items);
        setSelectedVideo(null);
      });
  };
  const handleClickVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Search onSearch={search} onMainPage={mainPage} />
      <section className={styles.content}>
        {selectedVideo ? (
          <div className={styles.detail}>
            <Detail video={selectedVideo} comments={comments} />
          </div>
        ) : null}

        <div className={styles.list}>
          <VideoList
            videos={videos}
            handleClickVideo={handleClickVideo}
            getComment={getComments}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </>
  );
}

export default App;
