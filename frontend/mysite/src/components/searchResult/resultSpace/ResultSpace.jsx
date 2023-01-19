import React from 'react';
import styles from './../../../styles/searchResult/results/resultSpace.module.scss'


const ResultSpace = (props) => {
  return (
    <div className={styles.resultSpace}>
      {/* <img src={props.src} alt='検索結果の画像' className={styles.resultSpaceImage}/> */}
      <img src='/img/shibuya.jpeg' alt='検索結果の画像' className={styles.resultSpaceImage}/>
      <p className={styles.spaceExplanation}>{props.explanation}</p>
    </div>
  )
}

export default ResultSpace;