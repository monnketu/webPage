import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/sideMenu.module.scss';
import SearchBox from './SearchBox';
import SearchOptionBox from './SearchOptionBox';
const SideMenu = () => {
  return (
    <div className={styles.sideMenuContainer}>
        <SearchBox  label1={'キーワード'}/><br></br>
        <SearchOptionBox label1={'特徴'}  options={['高速wi-fi','低価格','広々会議室','充実オプション','24時間制']}/><br></br>
        <SearchOptionBox label1={'価格'}  options={['~10,000円','10,000円〜20,000円','20,0000円〜40,000円','40,000円〜60,000円','60,000円〜']}/>
    </div>
  )
}
export default SideMenu;