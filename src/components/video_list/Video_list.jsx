import React from 'react';
import VideoItem from '../video_item/Video_item';
import styles from './Video_list.module.css';

const Video_list = (props) => {
  return (
    <ul className={styles.video__list}>
      {props.videos.map((item) => {
        return <VideoItem key={item.id} video={item} />;
      })}
    </ul>
  );
};

export default Video_list;
