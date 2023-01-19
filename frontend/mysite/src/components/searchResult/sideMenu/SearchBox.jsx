import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/searchBox.module.scss';
const SearchBox = (props) => {
  return (
    <div className={styles.searchBoxContainer}>
      <label for={styles.keyWordSearch}>{props.label}から探す</label><br />
      <input id={styles.keyWordSearch} />
    </div>
  )
}

export default SearchBox;