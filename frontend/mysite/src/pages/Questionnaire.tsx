import React from 'react'
import styles from './../styles/Questionnaire/Questionnaire.module.scss';
import Answers from '../components/Questionnaire/Answers';
import DiagnoseButton from '../components/Questionnaire/DiagnoseButton';
export default function Questionnaire() {
  return (
    <div className={styles.QuestionnaireContainer}>
      <div style={{display: 'flex'}}>
        <h2 className={styles.question}>←価格</h2>
        <h2 className={styles.question}>アクセス→</h2>
      </div>
      <Answers questionNumber={1} left='価格' right='アクセス' />
      <h2 className={styles.question}>←アクセス&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;営業形態→</h2>
      <Answers questionNumber={2} left = 'アクセス' right='営業形態' />
      <h2 className={styles.question}>←営業形態&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;価格→</h2>
      <Answers questionNumber={3} left='営業形態' right='価格'/>
      <DiagnoseButton />
    </div>
  )
}
