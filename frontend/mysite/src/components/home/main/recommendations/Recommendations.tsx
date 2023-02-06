import React from 'react'
import Recommendation from './Recommendation';
import Questionnaire from '../../../../pages/Questionnaire';
import styles from './../../../../styles/home/main/recommendations/recommendations.module.scss';
import { useAppDispatch, useSelector } from '../../../../store';
import { diagnoseStartReducer } from '../../../../slices/questionSlice';
export default function Recommendations() {
  const dispatch = useAppDispatch();
  const questionInfo = useSelector((state) => state.questionInfo);
  const params = ['image1', 'image1', 'image1',];
  return (

    <>
    <p className = {styles.search_popular_space_sentence}>おすすめから探す</p>
    <div className = {styles.search_popular_space_container}>
      <div className = {styles.popular_space}>
        {questionInfo.diagnose === 'notStarted' ?  <button className={styles.diagnoseButton} onClick = {() => dispatch(diagnoseStartReducer())}>診断スタート</button> : null}
        {questionInfo.diagnose === 'progress' ? <Questionnaire /> : null}
        {questionInfo.diagnose === 'finished' ? (<div className = {styles.popular_space_info_wrapper}>
          <ul className = {styles.popular_space_info_list}> 
            {params.map((param, index) => <li className={styles.popular_space_item} key={index}><Recommendation img={param} rank={index+1}/></li>)}
          </ul>
        </div>) : null}
      </div>
    </div>
  </>
    
    
  )
}
