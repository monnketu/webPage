import React from 'react';
import styles from './../../../styles/searchResult/header/header.module.scss';
const Header = (props) => {
  return ( 
    <div className={styles.header}>
      <img src='/img/shibuya.jpeg'  className={styles.headerImage} alt='検索ページ'/>
      <p className={styles.headerSentence}>お気に入り</p>
      <h2 className={styles.resultsLength}>1~4件を表示</h2>
      <h2 className={styles.searchAria}>{props.aria}</h2>
    </div>
  )
}

export default Header;