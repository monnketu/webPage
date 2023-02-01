import React, { useEffect } from 'react'
import styles from '../../../styles/Detail/main/spaceDetail.module.scss';
import moment from 'moment';
// import Character from '../../home/main/searcher/searchCharacters/Character';
export default function SpaceDetail(props:any) {
  console.log(props);
  const PRICE_BORDER = 15000; // 低価格となる基準の価格
  const moment_start_time = String(moment(`${props.spaceInfo.startTime}`, 'HH:mm:ss'));
  const moment_end_time = String(moment(`${props.spaceInfo.endTime}`, 'HH:mm:ss'))
  const startTime:Date = props.spaceInfo.startTime ? new Date(moment_start_time): new Date();
  const endTime = props.spaceInfo.endTime ? new Date(moment_end_time): new Date();
  const characters = Object.keys(props.spaceInfo).map((info) => {
    switch (info) {
      case 'isBattery':
        if (props.spaceInfo[info] === true) return '電源あり';
        break;
      case 'isEnhancedOptions':
        if (props.spaceInfo[info] === true) return '充実オプション';
        break;
      case 'isDropIn':
        if (props.spaceInfo[info] === true) return 'ドロップイン可能';
        break;
      case 'isMeetingRoom':
        if (props.spaceInfo[info] > 0) return '広々会議室';
        break;
      case 'wifi':
        if (props.spaceInfo[info] === 1) return 'wi-fiあり';
        else if (props.spaceInfo[info] === 2) return '高速wi-fi';
        break;
      case 'startTime':
        if (props.spaceInfo[info] === '00:00:00' && props.spaceInfo['endTime'] === '23:59:00') return '24時間制';
        break;
      case 'price':
        if (props.spaceInfo[info] < PRICE_BORDER) return '低価格';
        break;
      default:
        break;
    }
  })
  return (
    <div className={styles.spaceDetailContainer}>
      <p>{props.spaceInfo.isDropIn ? '月額契約またはドロップイン可能' : '月額契約制'}</p>
      <p>費用: {props.spaceInfo.price ? `${props.spaceInfo.price.toLocaleString()}/月` : '店舗にお問い合わせください'}</p>
      <p>営業時間: {`${startTime.getHours().toString().padStart(2,'0')}:${startTime.getMinutes().toString().padStart(2,'0')}`}~{`${endTime.getHours().toString().padStart(2,'0')}:${endTime.getMinutes().toString().padStart(2,'0')}`}</p>
      <ul className={styles.charactersList}>{characters.map((character, index) => character ? <li className={styles.character} key={index}><p>{character}</p></li>: null)}</ul>
      <p>所在地: {props.spaceInfo.address}</p>
    </div>
  )
}
