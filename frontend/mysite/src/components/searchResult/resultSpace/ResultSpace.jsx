import React from 'react';
import styles from './../../../styles/searchResult/results/resultSpace.module.scss'


const ResultSpace = (props) => {
  return (
    <div className={styles.resultSpace}>
      {/* <img src={props.src} alt='検索結果の画像' className={styles.resultSpaceImage}/> */}
      <img src='/img/shibuya.jpeg' alt='検索結果の画像' className={styles.resultSpaceImage}/>
      <div className={styles.spaceExplanationContainer}>
        <p className={styles.spaceExplanation_first}>{props.ex1}</p>
        <p className={styles.spaceExplanation}>{props.ex2 === 'True' ? 'ドロップイン可能' : '月額契約'}</p>
        <p className={styles.spaceExplanation}>{props.ex3}円/月</p>
        <p className={styles.spaceExplanation}>最寄り駅：{props.ex4}</p>
        <p className={styles.spaceExplanation}>{props.ex5}</p>
        <p className={styles.spaceExplanation}>{props.ex6}</p>
        <p className={styles.spaceExplanation}>wi-fi : {props.ex7 === '1' ? '普通' : '強'}</p>
        <p className={styles.spaceExplanation}>{props.ex8}</p>
        <p className={styles.spaceExplanation}>{props.ex9}</p>
        <p className={styles.spaceExplanation}>{props.ex10}</p>
      </div>
    </div>
  )
}

export default ResultSpace;