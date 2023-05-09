import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/searchResult/header/Header';
import Results from '../components/searchResult/resultSpace/Results';
import SideMenu from '../components/searchResult/sideMenu/SideMenu';
import moment from 'moment';
import styles from '../styles/searchResult/searchResult.module.scss'
import { useSelector } from '../store';
import { StateInterface } from '../interfaces';
import { StateOfFormToSearchResult } from '../components/home/Form/Form';
const SearchResult = () => {
  // Form.tsxからもらったstateを受け取る
  const location: StateOfFormToSearchResult = useLocation();
  const state = location.state;
  // このページへの導線はhomeからの
  // 検索ボタンや
  // 場所、特徴検索画面
  // からになるのでそこからはすべてstateを渡すためstateがundefinedならURL直叩き判定にする

  // URL直叩きかどうかを判定
  const isLocationState = state ? true : false;

  // どのコワーキングスペースを表示するかどうか(条件)
  const place = isLocationState ? (state.space !== 'all' ? state.space: '') : '';

  
  const businessForm = isLocationState ? (state.businessForm !== 'all' ? state.businessForm: ''): '';
  const time = isLocationState ? (state.time !== null ? state.time: '') : '';
  const dispName = isLocationState ? ((place===''&& businessForm===''&&time==='') ? '全て':`${place} ${businessForm} ${time}`): '全て';
  // 【要修正】searchBuForm変数2重になってる Form.tsx参照 3/2 
  const info = isLocationState ? (state.searchedByForm ? 
    {
      ...state, 
      en:(location.state.price ? `${businessForm}_price_${location.state.price}` :'all'), 
      ja:dispName, searchByForm: true
    }: location.state.info): 
    {
      ja: '全て', 
      en: 'all'
    };

  const [ data, setData ] = useState([]);
  useEffect(() => {
    try {
      // console.log(location, isLocationState, place, businessForm, time,dispName,info);
      fetch(`http://localhost:8000/api/coWorkingSpace/${info.en}/`, {
        mode: 'cors'
      })
      .then(response => {
        return response.json();
      })
      .then(res => {
        let ret = res.results;
        // URLを直接叩かれた場合かフォーム以外のところから検索された場合(エリアから探すなど)はここではなにもしない
        if (isLocationState && location.state.searchedByForm) {
          ret = ret.filter((data:any) => {
            if (info.station === '') {
              return true;
            } else {
              return data.station === info.station;
            }
          })
          .filter((data:any) => {
            if(location.state.time === '') {
              // return data.dropInFeePerDay < data.dropInFeePerHour;
              return true;
            } else {
              // 1店ずつチェックしてmoment型に整えて営業時間内かどうか確かめる
              const space_start_time = data.startTime === null ? moment(`00:00:59`, 'HH:mm:ss') : moment(`${data.startTime}`, 'HH:mm:ss');
              const space_end_time = data.endTime === null ? moment(`23:59:00`, 'HH:mm:ss'): moment(`${data.endTime}`, 'HH:mm:ss'); 
              // location.state.time(検索フォームの時間)はHH:mmの形式なので秒を手動で追加
              // console.log(space_start_time)
              return moment(`${location.state.time}:00`, 'HH:mm:ss').isBetween(space_start_time, space_end_time);
            }
          })
        }
        setData(ret);
      })
    } catch (error) {
      console.log("失敗しました");
    };
  }, [])
  return(
    <div>
      <Header aria={info} data={data}/>
      <div className={styles.sideMenuAndResultsContainer}>
        {/* <SideMenu /> */}
        <Results data={data} />
      </div>
    </div>
  )
}
export default SearchResult;