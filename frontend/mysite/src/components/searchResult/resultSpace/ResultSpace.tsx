import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../../store';
import { BusinessFormOption } from '../../../types/Option';
import { dispPrice, disp_wifi } from '../../../modules/';
import moment from 'moment';
import styles from './../../../styles/searchResult/results/resultSpace.module.scss'
import DBdata from '../../../interfaces/DB/DBdata';

interface Props {
  name: string;
  isDropIn: boolean;
  price: number;
  dropInFeePerDay: number;
  dropInFeePerHour: number;
  station: string;
  startTime: string;
  endTime: string;
  wifi: number;
  imageName:string;
  address: string;
  url: string;
  data: DBdata;
  key: number;
}
const ResultSpace = (props:Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const form: BusinessFormOption = useSelector(state => state.formInfo.businessForm);

  const Moment_startTime:any = moment(`${props.startTime}`, 'HH:mm:ss');
  const Moment_endTime:any = moment(`${props.endTime}`, 'HH:mm:ss');
  const startTime = props.startTime ? new Date(Moment_startTime): new Date();
  const endTime = props.endTime ? new Date(Moment_endTime): new Date();

  // お気に入りアイコンの画像パス
  const favoriteIconImagePath = `/img/favorite_icon${isFavorite ? '_clicked': ''}.png`;
  // 検索にヒットしたコワーキングスペースの写真
  const spaceImagePath = `/img/coWorkingSpace_images/${props.imageName}`;
  // 表示する営業時間(HH:mm ~ HH:mm)
  const dispTime = `${startTime.getHours().toString().padStart(2,'0')}:${startTime.getMinutes().toString().padStart(2,'0')}~${endTime.getHours().toString().padStart(2,'0')}:${endTime.getMinutes().toString().padStart(2,'0')}`;

  return (
    <div className={styles.resultSpace}>
      <img src={favoriteIconImagePath} className={styles.favorite_icon} onClick={() => setIsFavorite((fav) => !fav)}/>
      <div className={styles.spaceImageContainer}>
        <img src={spaceImagePath} alt='検索結果の画像' className={styles.resultSpaceImage}/>
      </div>
      <div className={styles.spaceExplanationContainer}>
        {/* pages/Detail.jsx にクリックしたコワーキングスペースのDBからのデータを渡す */}
        <Link className={styles.spaceExplanation_first} to='/detail' state={props.data}>{props.name}</Link>
        <p className={styles.spaceExplanation}>{props.isDropIn === true ? 'ドロップイン可能' : '月額契約'}</p>
        <h3 className={styles.spaceExplanation}>{dispPrice(form, props.price)}</h3>
        <p className={styles.spaceExplanation}>最寄り駅：{props.station}</p>
        <p className={styles.spaceExplanation}>営業時間:{dispTime}</p>
        <p className={styles.spaceExplanation}>wi-fi : {disp_wifi(props.wifi)}</p>
        <p className={styles.spaceExplanation}>{props.address}</p>
      </div>
    </div>
  )
}

export default ResultSpace;