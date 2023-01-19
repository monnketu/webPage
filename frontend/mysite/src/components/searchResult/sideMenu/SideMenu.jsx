import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/sideMenu.module.scss';
import SearchBox from './SearchBox';
const SideMenu = () => {
  return (
    <div className={styles.sideMenuContainer}>
      <SearchBox  label={'キーワード'}/>
      <SearchBox  label={'特徴'}/>
      <SearchBox  label={'価格'}/>
      <SearchBox  label={'おすすめ'}/>
    </div>
  )
}
export default SideMenu;