import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../../../styles/searchResult/results/resultSpace.module.scss'


const ResultSpace = (props) => {
  const disp_wifi = (num) => {
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
  }
  return (
    <div className={styles.resultSpace}>
      {/* <img src={props.src} alt='検索結果の画像' className={styles.resultSpaceImage}/> */}
      <img src='/img/shibuya.jpeg' alt='検索結果の画像' className={styles.resultSpaceImage}/>
      <div className={styles.spaceExplanationContainer}>
        <Link className={styles.spaceExplanation_first} to='/detail' state={props.data}>{props.ex1}</Link>
        <p className={styles.spaceExplanation}>{props.ex2 === 'True' ? 'ドロップイン可能' : '月額契約'}</p>
        <p className={styles.spaceExplanation}>{props.ex3}円/月</p>
        <p className={styles.spaceExplanation}>最寄り駅：{props.ex4}</p>
        <p className={styles.spaceExplanation}>営業時間:{props.ex5}～{props.ex6}</p>
        {/* <p className={styles.spaceExplanation}>{props.ex6}</p> */}
        {/* <p className={styles.spaceExplanation}>wi-fi : {props.ex7 === '0' ? '無' : (props.ex7 === '1' ? '普通' : '強')}</p> */}
        <p className={styles.spaceExplanation}>wi-fi : {disp_wifi(props.ex7)}</p>
        <p className={styles.spaceExplanation}>{props.ex8}</p>
        <p className={styles.spaceExplanation}>{props.ex9}</p>
        <p className={styles.spaceExplanation}>{props.ex10}</p>
      </div>
    </div>
  )
}

export default ResultSpace;