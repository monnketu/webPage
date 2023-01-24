import React from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/searchResult/header/Header';
import Results from '../components/searchResult/resultSpace/Results';
import SideMenu from '../components/searchResult/sideMenu/SideMenu';

import styles from './../styles/searchResult/searchResult.module.scss'
const SearchResult = () => {
  const location = useLocation();
  const ariaName = location.state.aria;
  console.log(ariaName)
  return(
    <div>
      <Header />
      <div className={styles.sideMenuAndResultsContainer }>
        <SideMenu />
        <Results />
      </div>
    </div>
  )
}
export default SearchResult;