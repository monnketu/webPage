import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ResultSpace from './ResultSpace';
import styles from './../../../styles/searchResult/results/results.module.scss'
import DBdata from '../../../interfaces/DBdata';

interface Props {
  data: DBdata[] | undefined;
}

const Results = (props:Props) => {
  // 以下テストデータ
  // const txt1 = '丸の内トラストタワー本館';
  // const txt2 = '月額契約 or ドロップイン可能';
  // const txt3 = '費用'
  // const txt4 = '営業時間'
  // const txt5 = 'オプション充実(特徴を記載)'
  // const txt6 = 'wifiの強度'
  // const txt7 = '東京都千代田区丸の内1-8-3丸の内トラストタワー本館 20階'
  // const txt8 = 'url'
  return(
    <div className={styles.results}>
      {/* <h2 className={styles.resultsLength}>1~4件を表示</h2> */}
      {/* Object.keys(props.data) = ['props0', 'props1',...,'props17'] */}
      {/* {Array(Object.keys(props.data).length).fill(0).map(() => <ResultSpace ex1={txt1} ex2={txt2} ex3={txt3} ex4={txt4} ex5={txt5} ex6={txt6} />)} */}
      {props.data ? props.data.map((data, index) => {
        return (
          <ResultSpace 
            name={data.name} 
            isDropIn={data.isDropIn} 
            price={data.price} 
            station={data.station} 
            startTime={data.startTime} 
            endTime={data.endTime}  
            wifi={data.wifi}
            imageName={data.imageName} 
            address={data.address} 
            url={'url'} 
            data={data} 
            key={index}
          />
        )
      }): null}
    </div>
  )
}

export default Results;