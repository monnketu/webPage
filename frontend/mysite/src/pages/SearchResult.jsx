import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/searchResult/header/Header';
import Results from '../components/searchResult/resultSpace/Results';
import SideMenu from '../components/searchResult/sideMenu/SideMenu';

import styles from './../styles/searchResult/searchResult.module.scss'
const SearchResult = () => {
  const location = useLocation();
  const aria = location.state ? location.state.aria: {ja: '全て', en: 'all'};
  const [ data, setData ] = useState([]);
  // const ariaName = location.state.aria;
  useEffect(() => {
    try {
      fetch(`http://localhost:8000/api/coWorkingSpace/${aria.en}/`)
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res)
        setData(res.results);
      })
    } catch (error) {
      console.log("失敗しました");
    };
  },[])
  return(
    <div>
      <Header aria={aria}/>
      <div className={styles.sideMenuAndResultsContainer }>
        {/* <SideMenu /> */}
        <Results data={data}/>
      </div>
    </div>
  )
}
export default SearchResult;