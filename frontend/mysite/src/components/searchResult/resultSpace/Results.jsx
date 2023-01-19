import React from 'react';
import ResultSpace from './ResultSpace';
import styles from './../../../styles/searchResult/results/results.module.scss'
const Results = (props) => {
  const explanation = 'ダミーテキストexplanation';
  return(
    <div className={styles.results}>
      <h2 className={styles.resultsLength}>1~4件を表示</h2>
      {Array(5).fill(0).map(() => <ResultSpace explanation={explanation}/>)}
    </div>
  )
}

export default Results;