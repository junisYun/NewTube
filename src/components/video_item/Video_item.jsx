import React from 'react';
import styles from './Video_item.module.css';
const Video_item = (props) => {
  const title = props.video.snippet.title;
  const refacName = (name) => {
    return name.replaceAll('&#39;', "'").replaceAll('&amp;', '&').replaceAll('&quot;', '"');
  };
  const videoURL = `https://www.youtube.com/watch?v=${props.video.id}`;

  const handleClickVideo = () => {
    props.handleClickVideo(props.video);
  };

  return (
    <li className={`${styles.video__card}`} onClick={handleClickVideo}>
      <div className={styles.video__image__overlay}>
        <img className={styles.video__image} src={props.video.snippet.thumbnails.medium.url} alt="thumbnails" />
      </div>
      <div className={styles.video__description}>
        <h2 className={styles.video__title}>{refacName(title).length > 120 ? refacName(title).slice(0, 120) + '...' : refacName(title)}</h2>
        <h3 className={styles.video__channel}>{props.video.snippet.channelTitle}</h3>
      </div>
    </li>
  );
};

export default Video_item;
