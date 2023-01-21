import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/sideMenu.module.scss';
import SearchBox from './SearchBox';
const SideMenu = () => {
  return (
    <div className={styles.sideMenuContainer}>
        <SearchBox  label1={'キーワード'}/>
    </div>
  )
}
export default SideMenu;