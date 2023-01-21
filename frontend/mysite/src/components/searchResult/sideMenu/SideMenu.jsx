import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/sideMenu.module.scss';
import SearchBox from './SearchBox';
import SearchOptionBox from './SearchOptionBox';
const SideMenu = () => {
  return (
    <div className={styles.sideMenuContainer}>
        <SearchBox  label1={'キーワード'}/>
        <SearchOptionBox label1={'リスト1'}  options={['選択肢1','選択肢2','選択肢3','選択肢4',]}/>
        <SearchOptionBox label1={'リスト2'}  options={['wi-fi','電源','個室','ドリンクバー',]}/>
    </div>
  )
}
export default SideMenu;