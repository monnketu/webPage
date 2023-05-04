import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/searchResult/header/Header';
import Results from '../components/searchResult/resultSpace/Results';
import SideMenu from '../components/searchResult/sideMenu/SideMenu';

import styles from '../styles/searchResult/searchResult.module.scss'

import DBdata from '../interfaces/DB/DBdata';
const SearchResult = () => {
  const [ data, setData ] = useState<DBdata[]>();
  useEffect(() => {
    console.log('useEffect!!');
    try {
      fetch("http://localhost:8000/polls/favorite/").then(response => {
        return response.json();
      }).then((data) => {
        for(let key in data) { 
          data[key] = JSON.parse(data[key]);
        } // ['param0', 'param1', ... , 'param17'];
        setData(data);
      })
    } catch (error) {
      console.log("失敗しました");
    };
    console.log('OK');
    
  },[])

  const location = useLocation();
  // const { test } = location.state;
  return(
    <div>
      {/* <Header /> */}
      <div className={styles.sideMenuAndResultsContainer }>
        <SideMenu />
        <Results data={data}/>
      </div>
    </div>

    
  )
}
export default SearchResult;