import React, { useState } from 'react';
import styles from './Search.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = (props) => {
  const [keyword, setKeyword] = useState('');

  const handleSearchClick = (event) => {
    event.preventDefault();
    props.onSearch(keyword);
  };

  const handleOnChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <form action="">
      <div className={styles.searchBar}>
        <div className={styles.title}>
          <span className={styles.title__logo}>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span className={styles.title__name}>NewTube</span>
        </div>
        <input className={styles.searchInput} type="text" placeholder="Search..." onChange={handleOnChange} />
        <button className={styles.button__search} type="submit" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default Search;
