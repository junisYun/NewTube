import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.searchBar}>
      <div className="title">
        <span className="title__logo">로고</span>
        <span className="title__name">Youtube</span>
      </div>
      <input className={styles.searchInput} type="text" placeholder="Search..." />
      <button className="button__search">돋보기아이콘</button>
    </div>
  );
};

export default Search;
