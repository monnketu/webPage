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
    try {
      fetch("http://localhost:8000/api/coWorkingSpace/all/").then(response => {
        return response.json();
      }).then((data) => {
        console.log(data.results);
        // for(let key in data.results) { 
        //   data[key] = JSON.parse(data[key]);
        // } // ['param0', 'param1', ... , 'param17'];
        setData(data.results);
      })
    } catch (error) {
      console.log("失敗しました");
    };
    
  },[])

  const location = useLocation();
  // const { test } = location.state;
  return(
    <div>
      {/* <Header /> */}
      <h1>(お気に入り一覧)</h1>
      <div className={styles.sideMenuAndResultsContainer }>
        <SideMenu />
        <Results data={data}/>
      </div>
    </div>

    
  )
}
export default SearchResult;