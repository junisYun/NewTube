import React from 'react';
import styles from './Detail.module.css';
import RefacName from '../../service/refacName';

const Detail = ({ video }) => {
  const refac = new RefacName();
  const title = refac.refacName(video.snippet.title);
  const description = refac.refacName(video.snippet.description);
  const channelTitle = refac.refacName(video.snippet.channelTitle);
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        title={video.snippet.title}
        type="text/html"
        width="100%"
        height="1080"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.meta}>
        <h2>
          {title} - {channelTitle}
        </h2>
        <h3>{description.length > 200 ? description + '...' : description}</h3>
      </div>
    </section>
  );
};
export default Detail;
