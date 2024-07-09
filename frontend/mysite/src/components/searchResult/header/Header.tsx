import React from 'react';
import styles from './../../../styles/header/header.module.scss';
import MenuBar from '../../menuBar/MenuBar';
import MenuHeader from '../../Header/Header';
import { useLocation } from "react-router-dom";
import areaName from '../../../areaName';
import Area from '../../../interfaces/form/Area';
import DBdata from '../../../interfaces/DB/DBdata';

interface Props {
  area: Area;
  data: DBdata[];
}

const Header = (props:Props) => {
  // DBからとってきた200件分のデータを表示
  // console.log('data', props.data);
  return ( 
    <div className={styles.header}>
      <img src={`/img/${props.area.searchedByForm === true ? 'image2':props.area.name.en}.jpeg`}  className={styles.headerImage} alt='検索ページ'/>
      {/* <img src={`/img/image2.jpeg`}  className={styles.headerImage} alt='検索ページ'/> */}
      <div>
        <MenuHeader />
      </div>
      <p className={styles.headerSentence}>{props.area.name.ja}</p>
      <h2 className={styles.resultsLength}>1~{props.data.length}件を表示</h2>
      {/* <h2 className={styles.searcharea}>{props.area}</h2> */}
    </div>
  )
}

export default Header;