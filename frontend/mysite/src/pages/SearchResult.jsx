import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/searchResult/header/Header';
import Results from '../components/searchResult/resultSpace/Results';
import SideMenu from '../components/searchResult/sideMenu/SideMenu';
import moment from 'moment';
import styles from './../styles/searchResult/searchResult.module.scss'
const SearchResult = () => {
  const location = useLocation();
  const isLocationState = location.state ? true : false;
  const place = isLocationState ? (location.state.space !== 'all' ? location.state.space: '') : '';
  const dropIn = isLocationState ? (location.state.dropIn !== 'all' ? location.state.dropIn: '') : '';
  const time = isLocationState ? (location.state.time !== null ? location.state.time: '') : '';
  const dispName = isLocationState ? ((place===''&&dropIn===''&&time==='') ? '全て':`${place} ${dropIn} ${time}`): '全て' 
  const info = isLocationState ? (location.state.searchedByForm ? {...location.state, en:'all', ja:dispName} : location.state.info): {ja: '全て', en: 'all'};
  const [ data, setData ] = useState([]);
  useEffect(() => {
    try {
      fetch(`http://localhost:8000/api/coWorkingSpace/${info.en}/`)
      .then(response => {
        return response.json();
      })
      .then(res => {
        let ret = res.results; 
        // URLを直接叩かれた場合かフォーム以外のところから検索された場合(エリアから探すなど)はここではなにもしない
        if (isLocationState && location.state.searchedByForm) {
          ret = ret.filter((data) => {
            switch(place) {
              case 'cafe': {
                return data.isCafe === true;
              }
              case 'coWorkingSpace':{
                return data.isCafe === false;
              }
              default: {
                return data;
              }
            }
          }).filter((data) => {
            switch(dropIn) {
              case 'dropIn': {
                return data.isDropIn === true;
              }
              case 'monthly': {
                return data.isDropIn === false;
              }
              default: {
                return data;
              }
            }
          })
          .filter((data) => {
            // 1店ずつチェックしてmoment型に整えて営業時間内かどうか確かめる
            const space_start_time = data.startTime === null ? moment(`00:00:59`, 'HH:mm:ss') : moment(`${data.startTime}`, 'HH:mm:ss');
            const space_end_time = data.endTime === null ? moment(`23:59:00`, 'HH:mm:ss'): moment(`${data.endTime}`, 'HH:mm:ss'); 
            // location.state.time(検索フォームの時間)はHH:mmの形式なので秒を手動で追加
            console.log(space_start_time)
            return moment(`${location.state.time}:00`, 'HH:mm:ss').isBetween(space_start_time, space_end_time);
          })
        }
        setData(ret);
      })
    } catch (error) {
      console.log("失敗しました");
    };
  },[])
  return(
    <div>
      <Header aria={info} data={data}/>
      <div className={styles.sideMenuAndResultsContainer }>
        {/* <SideMenu /> */}
        <Results data={data} />
      </div>
    </div>
  )
}
export default SearchResult;