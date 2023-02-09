import React, { useState } from 'react'
import Answer from './Answer';
import styles from './../../styles/Questionnaire/answers.module.scss';

interface Props {
  questionNumber: number;
}
export default function Answers(props:Props) {
  return (
    <div className={styles.answersContainer}>
      <Answer text={'価格'} rank={5} questionNumber={props.questionNumber} />
      <Answer text={'やや価格'} rank={3} questionNumber={props.questionNumber} />
      <Answer text={'同程度'} rank={1} questionNumber={props.questionNumber} />
      <Answer text={'ややアクセス'} rank={1/3} questionNumber={props.questionNumber} />
      <Answer text={'アクセス'} rank={1/5} questionNumber={props.questionNumber} />
    </div>
  )
}
