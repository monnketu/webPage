import React from 'react';
import styles from './../../../styles/searchResult/header/header.module.scss';
const Header = (props) => {
  return ( 
    <div className={styles.header}>
      <img src='/img/shibuya.jpeg'  className={styles.headerImage} alt='検索ページ'/>
      <h2 className={styles.searchAria}>{props.aria}</h2>
    </div>
  )
}

export default Header;