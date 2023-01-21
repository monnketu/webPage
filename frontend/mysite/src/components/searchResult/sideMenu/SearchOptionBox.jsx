import React from 'react';
import styles from './../../../styles/searchResult/sideTopMenu/searchBox.module.scss';
const SearchBox = (props) => {
  return (
    <div className={styles.searchBoxContainer}>
      <label for={styles.keyWordSearch}>{props.label1}から探す</label><br />
      <select id ={styles.keyWordSearch}>
        <option></option>
      </select>

    </div>
  )
}

export default SearchBox;