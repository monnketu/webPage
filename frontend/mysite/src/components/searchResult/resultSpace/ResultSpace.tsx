import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../../../styles/searchResult/results/resultSpace.module.scss'
import moment from 'moment';
import DBdata from '../../../interfaces/DBdata';


interface Props {
  name: string;
  isDropIn: boolean;
  price: number;
  station: string;
  startTime: string;
  endTime: string;
  wifi: number;
  address: string;
  url: string;
  data: DBdata;
  key: number;
}
const ResultSpace = (props:Props) => {
  const disp_wifi = (num:number) => {
    switch (num) {
      case 0:
        return '無'; 
      case 1:
        return '普通'; 
      case 2:
        return '強';
      default:
        return '不明' 
    }
  };
  const Moment_startTime:any = moment(`${props.startTime}`, 'HH:mm:ss');
  const Moment_endTime:any = moment(`${props.endTime}`, 'HH:mm:ss');
  const startTime = props.startTime ? new Date(Moment_startTime): new Date();
  const endTime = props.endTime ? new Date(Moment_endTime): new Date();
  return (
    <div className={styles.resultSpace}>
      {/* <img src={props.src} alt='検索結果の画像' className={styles.resultSpaceImage}/> */}
      <img src='/img/shibuya.jpeg' alt='検索結果の画像' className={styles.resultSpaceImage}/>
      <div className={styles.spaceExplanationContainer}>
        {/* <Link className={styles.spaceExplanation_first} to='/detail' state={props.data}><h1>渋谷駅から徒歩5分！</h1></Link> */}
        {/* pages/Detail.jsx にクリックしたコワーキングスペースのDBからのデータを渡す */}
        <Link className={styles.spaceExplanation_first} to='/detail' state={props.data}>{props.name}</Link>
        {/* <p>{props.ex1}</p> */}
        <p className={styles.spaceExplanation}>{props.isDropIn === true ? 'ドロップイン可能' : '月額契約'}</p>
        {/* <p className={styles.spaceExplanation}>{props.ex3}円/月</p> */}
        <h3 className={styles.spaceExplanation}>{props.price.toLocaleString()}円/月</h3>
        <p className={styles.spaceExplanation}>最寄り駅：{props.station}</p>
        <p className={styles.spaceExplanation}>営業時間:{`${startTime.getHours().toString().padStart(2,'0')}:${startTime.getMinutes().toString().padStart(2,'0')}`}~{`${endTime.getHours().toString().padStart(2,'0')}:${endTime.getMinutes().toString().padStart(2,'0')}`}</p>
        {/* <p className={styles.spaceExplanation}>{props.ex6}</p> */}
        {/* <p className={styles.spaceExplanation}>wi-fi : {props.ex7 === '0' ? '無' : (props.ex7 === '1' ? '普通' : '強')}</p> */}
        <p className={styles.spaceExplanation}>wi-fi : {disp_wifi(props.wifi)}</p>
        <p className={styles.spaceExplanation}>{props.address}</p>
        <p className={styles.spaceExplanation}>{props.url}</p>
        {/* <p className={styles.spaceExplanation}>{props.data}</p> */}
      </div>
    </div>
  )
}

export default ResultSpace;