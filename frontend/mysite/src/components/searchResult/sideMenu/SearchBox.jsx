import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/searchBox.module.scss';
const SearchBox = (props) => {
  return (
    <div className={styles.searchBoxContainer}>
      <label for={styles.keyWordSearch}>{props.label1}から探す</label><br />
      <input class = "search-criteria" type = "text" placeholder="エリア・駅"/>
        <input class = "search-criteria" type = "text" placeholder="ワーキングスペース名" />
        <select name="example">
          <option value="">選択して下さい</option>
          <option>月額契約</option>
          <option>ドロップイン可能</option>
          </select>
    
      

    </div>
  )
}

export default SearchBox;