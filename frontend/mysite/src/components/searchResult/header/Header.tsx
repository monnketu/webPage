import React from 'react';
import styles from './../../../styles/header/header.module.scss';
import MenuBar from '../../menuBar/MenuBar';
import { useLocation } from "react-router-dom";
import ariaName from '../../../ariaName';
import Aria from '../../../interfaces/Aria';
import DBdata from './../../../interfaces/DBdata';

interface Props {
  aria: Aria;
  data: DBdata[];
}

const Header = (props:Props) => {
  return ( 
    <div className={styles.header}>
      <img src='/img/shibuya.jpeg'  className={styles.headerImage} alt='検索ページ'/>
      <div>
        <MenuBar />
      </div>
      <p className={styles.headerSentence}>{props.aria.ja}</p>
      <h2 className={styles.resultsLength}>1~{props.data.length}件を表示</h2>
      {/* <h2 className={styles.searchAria}>{props.aria}</h2> */}
    </div>
  )
}

export default Header;