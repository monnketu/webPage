import React, { useState } from 'react'
import Answer from './Answer';
import styles from './../../styles/Questionnaire/answers.module.scss';

interface Props {
  left: string;
  right: string;
  questionNumber: number;
}
export default function Answers(props:Props) {
  return (
    <div className={styles.answersContainer}>
      <Answer text={props.left} rank={5} questionNumber={props.questionNumber} />
      <Answer text={'やや' + props.left} rank={3} questionNumber={props.questionNumber} />
      <Answer text={'同程度'} rank={1} questionNumber={props.questionNumber} />
      <Answer text={'やや' + props.right} rank={1/3} questionNumber={props.questionNumber} />
      <Answer text={props.right} rank={1/5} questionNumber={props.questionNumber} />
    </div>
  )
}
