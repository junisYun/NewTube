import React from 'react';
import VideoItem from '../video_item/Video_item';
import styles from './Video_list.module.css';

const Video_list = (props) => {
  const handleClickVideo = (video) => {
    props.handleClickVideo(video);
  };
  const displayType = props.display === 'list' ? styles.list : styles.grid;
  return (
    <ul className={`${styles.video} ${displayType}`}>
      {props.videos.map((item) => {
        return <VideoItem key={item.id} video={item} handleClickVideo={handleClickVideo} display={props.display} />;
      })}
    </ul>
  );
};

export default Video_list;
