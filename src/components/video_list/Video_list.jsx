import React from 'react';
import VideoItem from '../video_item/Video_item';

const Video_list = (props) => {
  return (
    <ul>
      {props.videos.map((item) => {
        return <VideoItem key={item.id} video={item.snippet} />;
      })}
    </ul>
  );
};

export default Video_list;
