import React, { useState } from 'react'
import Answer from './Answer';
import styles from './../../styles/Questionnaire/answers.module.scss';

interface Props {
  questionNumber: number;
}
export default function Answers(props:Props) {
  return (
    <div className={styles.answersContainer}>
      <Answer text={'価格'} rank={4} questionNumber={props.questionNumber} />
      <Answer text={'やや価格'} rank={3} questionNumber={props.questionNumber} />
      <Answer text={'同程度'} rank={2} questionNumber={props.questionNumber} />
      <Answer text={'ややアクセス'} rank={1} questionNumber={props.questionNumber} />
      <Answer text={'アクセス'} rank={0} questionNumber={props.questionNumber} />
    </div>
  )
}
