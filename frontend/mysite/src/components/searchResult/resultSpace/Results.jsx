import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ResultSpace from './ResultSpace';
import styles from './../../../styles/searchResult/results/results.module.scss'
const Results = () => {
  const txt1 = '丸の内トラストタワー本館';
  const txt2 = '月額契約 or ドロップイン可能';
  const txt3 = '費用'
  const txt4 = '営業時間'
  const txt5 = 'オプション充実(特徴を記載)'
  const txt6 = 'wifiの強度'
  const txt7 = '東京都千代田区丸の内1-8-3丸の内トラストタワー本館 20階'
  const txt8 = 'url'
  const [ data, setData ] = useState({a:'null',b:'null'});
  useEffect(() => {
    try {
      fetch("http://localhost:8000/polls/coupon/",{
        headers: {

        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        // for key in data:
          // 
        for(let key in data) { 
          data[key] = JSON.parse(data[key]);
        } // ['param0', 'param1', ... , 'param17'];
        setData(data);
        console.log(data);
      })
    } catch (error) {
      console.log("失敗しました");
    };
    console.log('OK');
  },[])
  const props = {data: data};
  // const startTime = props.data.param0 ? moment(new Date(props.data.param0.coupon_endTime)) : moment()
  // console.log(props.data.param0 ?  moment(new Date(props.data.param0.coupon_endTime)).format('HH:mm') : 'null');
  return(
    <div className={styles.results}>
      {/* <h2 className={styles.resultsLength}>1~4件を表示</h2> */}
      {/* Object.keys(props.data) = ['props0', 'props1',...,'props17'] */}
      {/* {Array(Object.keys(props.data).length).fill(0).map(() => <ResultSpace ex1={txt1} ex2={txt2} ex3={txt3} ex4={txt4} ex5={txt5} ex6={txt6} />)} */}
      {Object.keys(props.data).map((data, index) => <ResultSpace ex1={props.data[data].coupon_name} ex2={props.data[data].coupon_isBattery} ex3={props.data[data].coupon_price} ex4={props.data[data].coupon_station} ex5={props.data[data].coupon_startTime} ex6={props.data[data].coupon_endTime}  ex7={props.data[data]['coupon_wi-fi']} ex8={props.data[data].coupon_address} ex9={txt8} key={index}/>)}
    </div>
  )
}

export default Results;