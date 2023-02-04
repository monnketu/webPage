import React from 'react'
import styles from './../styles/Questionnaire/Questionnaire.module.scss';
import Answers from '../components/Questionnaire/Answers';
export default function Questionnaire() {
  return (
    <div className={styles.QuestionnaireContainer}>
      <Answers />
    </div>
  )
}
