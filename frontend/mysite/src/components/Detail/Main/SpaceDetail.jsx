import React from 'react'
import styles from './../../../styles/Detail/main/spaceDetail.module.scss';
import moment from 'moment';
export default function SpaceDetail(props) {
  console.log(moment(`${props.spaceInfo.startTime}`, 'HH:mm:ss'))
  return (
    <div className={styles.spaceDetailContainer}>
      <p >{props.spaceInfo.isDropIn ? '月額契約またはドロップイン可能' : '月額契約制'}</p>
      <p>費用: {props.spaceInfo.price ? `${props.spaceInfo.price}/月` : '店舗にお問い合わせください'}</p>
      {/* <p>営業時間: {props.spaceInfo.startTime ? moment(props.spaceInfo.startTime) : '店舗にお問い合わせください'}</p> */}
    </div>
  )
}
