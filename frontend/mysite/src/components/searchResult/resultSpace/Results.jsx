import React from 'react';
import ResultSpace from './ResultSpace';
import styles from './../../../styles/searchResult/results/results.module.scss'
const Results = (props) => {
  const txt1 = '丸の内トラストタワー本館';
  const txt2 = '月額契約 or ドロップイン可能';
  const txt3 = 'オプション充実(特徴を記載)'
  const txt4 = '東京駅日本橋口、八重洲北口より徒歩1分'
  const txt5 = '東京都千代田区丸の内1-8-3丸の内トラストタワー本館 20階'
  const txt6 = 'url'
  return(
    <div className={styles.results}>
      {/* <h2 className={styles.resultsLength}>1~4件を表示</h2> */}
      {Array(5).fill(0).map(() => <ResultSpace ex1={txt1} ex2={txt2} ex3={txt3} ex4={txt4} ex5={txt5} ex6={txt6} />)}
    </div>
  )
}

export default Results;