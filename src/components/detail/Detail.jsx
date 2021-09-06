import React from 'react';
import styles from './Detail.module.css';
import RefacName from '../../service/refacName';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Detail = ({ video, comments }) => {
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
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&loop=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.meta}>
        <h2>
          {title} - {channelTitle}
        </h2>
        <h3>{description.length > 200 ? description + '...' : description}</h3>
        {comments.map((item) => (
          <div key={item.snippet.topLevelComment.id} className={styles.comment}>
            <a href={item.snippet.topLevelComment.snippet.authorChannelUrl} target="blank">
              <img className={styles.comment__img} src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            </a>
            <div className={styles.comment__info}>
              <a href={item.snippet.topLevelComment.snippet.authorChannelUrl} target="blank">
                <span className={styles.comment__user}>{item.snippet.topLevelComment.snippet.authorDisplayName}</span>
              </a>
              <h5 className={styles.comment__text}>{item.snippet.topLevelComment.snippet.textOriginal}</h5>
              <div className={styles.comment__like}>
                <FontAwesomeIcon icon={faThumbsUp} />
                {item.snippet.topLevelComment.snippet.likeCount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Detail;
