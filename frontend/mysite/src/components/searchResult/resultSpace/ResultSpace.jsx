import React from 'react';
import styles from './../../../styles/searchResult/results/resultSpace.module.scss'


const ResultSpace = (props) => {
  return (
    <div className={styles.resultSpace}>
      {/* <img src={props.src} alt='検索結果の画像' className={styles.resultSpaceImage}/> */}
      <img src='/img/shibuya.jpeg' alt='検索結果の画像' className={styles.resultSpaceImage}/>
      <div className={styles.spaceExplanationContainer}>
        <p className={styles.spaceExplanation_first}>{props.ex1}</p>
        <p className={styles.spaceExplanation}>{props.ex2}</p>
        <p className={styles.spaceExplanation}>{props.ex3}</p>
        <p className={styles.spaceExplanation}>{props.ex4}</p>
        <p className={styles.spaceExplanation}>{props.ex5}</p>
        <p className={styles.spaceExplanation}>{props.ex6}</p>
      </div>
    </div>
  )
}

export default ResultSpace;