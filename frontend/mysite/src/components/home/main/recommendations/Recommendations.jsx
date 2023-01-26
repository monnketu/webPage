import React from 'react'
import Recommendation from './Recommendation';
import styles from './../../../../styles/home/main/recommendations/recommendations.module.scss';

export default function Recommendations() {
  const params = ['image1', 'image1', 'image1',];
  return (
    <div className = {styles.search_popular_space_container}>
      <p className = {styles.search_popular_space_sentence}>おすすめから探す</p>
      <div className = {styles.popular_space}>
        <div className = {styles.popular_space_info_wrapper}>
          <ul className = {styles.popular_space_info_list}> 
            {params.map((param, index) => <li className={styles.popular_space_item}><Recommendation img={param} rank={index+1}/></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
