import React from 'react'
import styles from './../styles/Questionnaire/Questionnaire.module.scss';
import Answers from '../components/Questionnaire/Answers';
import DiagnoseButton from '../components/Questionnaire/DiagnoseButton';
export default function Questionnaire() {
  return (
    <div className={styles.QuestionnaireContainer}>
      <h2 className={styles.question}>Q1 価格</h2>
      <Answers questionNumber={1} />
      <h2 className={styles.question}>Q2 場所</h2>
      <Answers questionNumber={2}/>
      <h2 className={styles.question}>Q3 ドロップイン</h2>
      <Answers questionNumber={3}/>
      <DiagnoseButton />
    </div>
  )
}
