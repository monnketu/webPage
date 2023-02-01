import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/searchBox.module.scss';

interface Props {
  label1: string;
}
const SearchBox = (props: Props) => {
  return (
    <div className={styles.searchBoxContainer}>
      <label htmlFor={styles.keyWordSearch}>{props.label1}から探す</label><br />
      <input className = "search-criteria" type = "text" placeholder="エリア・駅"/>
        <input className = "search-criteria" type = "text" placeholder="ワーキングスペース名" />
        <select name="example">
          <option value="">選択して下さい</option>
          <option>月額契約</option>
          <option>ドロップイン可能</option>
          </select>
    
      

    </div>
  )
}

export default SearchBox;