import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../components/searchResult/header/Header';
import Results from '../components/searchResult/resultSpace/Results';
import SideMenu from '../components/searchResult/sideMenu/SideMenu';
import moment from 'moment';
import styles from '../styles/searchResult/searchResult.module.scss'
import { useSelector } from '../store';
import { ReqBody, BusinessForm, DBdata, StateInterface } from '../interfaces';
import { StateOfFormToSearchResult } from '../components/home/Form/Form';
import { BusinessFormOption } from '../types/Option';

const SearchResult = () => {
  // Form.tsxからもらったstateを受け取る
  const location: StateOfFormToSearchResult = useLocation();
  const state = location.state;
  // このページへの導線はhomeからの検索ボタンや場所、特徴検索画面からになるのでそこからはすべてstateを渡すためstateがundefinedならURL直叩き判定にする

  // URL直叩きかどうかを判定(is location.state?)
  const isLocationState = state ? true : false;

  // どのコワーキングスペースを表示するかどうか(条件)
  // 検索条件の場所がallならplace='', all以外になにかあればそれにする(渋谷など)
  const place = isLocationState ? (state.space !== 'all' ? state.space: '') : '';

  // 検索条件の営業形態(ドロップイン1日とか月額とか)
  const businessForm:(BusinessFormOption | '') = isLocationState ? (state.businessForm !== 'all' ? state.businessForm: ''): '';
  // ユーザーが指定した時間
  const time = isLocationState ? (state.time !== null ? state.time: '') : '';
  // 検索結果画面に表示される検索条件(ex. 渋谷 ドロップイン1日 12:56)
  const dispName = isLocationState ? 
    ((place === '' && businessForm === '' && time === '') ? 
      '全て':
      `${place} ${businessForm} ${time}`): 
    '全て';

  // 【要修正】searchByForm変数2重になってる Form.tsx参照  

  // 検索条件の情報を格納変数
  const searchInfo = isLocationState ? (state.searchedByForm ? 
    // フォームから検索ボタンを押した場合
    {
      ...state, 
      name: {
        en:(location.state.price ? `${businessForm}_price_${location.state.price}` :'all'), 
        ja:dispName,
      },
      searchByForm: true,
      isDirectURL: false,
    }:
    // 特徴から探すなどのフォーム外から検索した場合 (searchChara)
    {
      ...location.state,
      name: {
        en: 'all',
        ja: '全て',
      },
      isDirectURL: false,
    }):
    // URL直叩きの場合
    {
      name: {
        en: 'all',
        ja: '全て',
      },
      isDirectURL: true,
      station: '',
    };

  const [ data, setData ] = useState<DBdata[]>([]);
  useEffect(() => {
    try {
      fetch(`http://localhost:8000/api/coWorkingSpace/${searchInfo.name.en}/`, {
        mode: 'cors'
      })
      // const req_body: ReqBody = {
      //   spaceID: 150,
      //   userID: 'kokoko',
      // }
      
      // fetch(`http://localhost:8000/polls/favorite-data/`, {
      //   mode: 'cors',
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(req_body)
      // })
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log(res)
        let ret:DBdata[] = res.results;

        // URLを直接叩かれた場合かフォーム以外のところから検索された場合(エリアから探すなど)はここではなにもしない
        if (isLocationState && location.state.searchedByForm) {
          ret = ret.filter((data:DBdata) => {
            if (searchInfo.station === '') {
              return true;
            } else {
              return data.station === searchInfo.station;
            }
          })
          .filter((data:DBdata) => {
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
      <Header area={searchInfo} data={data} />
      <div className={styles.sideMenuAndResultsContainer}>
        {/* <SideMenu /> */}
        <Results data={data} />
      </div>
    </div>
  )
}
export default SearchResult;