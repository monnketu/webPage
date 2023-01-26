import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ResultSpace from './ResultSpace';
import styles from './../../../styles/searchResult/results/results.module.scss'
const Results = (props) => {
  const txt1 = '丸の内トラストタワー本館';
  const txt2 = '月額契約 or ドロップイン可能';
  const txt3 = '費用'
  const txt4 = '営業時間'
  const txt5 = 'オプション充実(特徴を記載)'
  const txt6 = 'wifiの強度'
  const txt7 = '東京都千代田区丸の内1-8-3丸の内トラストタワー本館 20階'
  const txt8 = 'url'
  // useEffect(() => {
  //   try {
  //     fetch(`http://localhost:8000/api/coWorkingSpace/${aria.en}/`)
  //     .then(response => {
  //       console.log('res',response)
  //       return response.json();
  //     })
  //     .then(res => {
  //       console.log(res)
  //       // for key in data:
  //         // 
  //       // for(let key of res.results) { 
  //         // data[key] = JSON.parse(data[key]);
  //       // } // ['param0', 'param1', ... , 'param17'];
  //       setData(res.results)
  //       console.log(res);
  //     })
  //   } catch (error) {
  //     console.log("失敗しました");
  //   };
  //   console.log('OK');
  // },[])
  // const props = {data: data};
  // const startTime = props.data.param0 ? moment(new Date(props.data.param0.coupon_endTime)) : moment()
  // console.log(props.data.param0 ?  moment(new Date(props.data.param0.coupon_endTime)).format('HH:mm') : 'null');
  return(
    <div className={styles.results}>
      {/* <h2 className={styles.resultsLength}>1~4件を表示</h2> */}
      {/* Object.keys(props.data) = ['props0', 'props1',...,'props17'] */}
      {/* {Array(Object.keys(props.data).length).fill(0).map(() => <ResultSpace ex1={txt1} ex2={txt2} ex3={txt3} ex4={txt4} ex5={txt5} ex6={txt6} />)} */}
      {props.data ? props.data.map((data, index) => <ResultSpace ex1={data.name} ex2={data.isBattery} ex3={data.price} ex4={data.station} ex5={data.startTime} ex6={data.endTime}  ex7={data.wifi} ex8={data.address} ex9={txt8} data={data} key={index}/> ): null}
    </div>
  )
}

export default Results;