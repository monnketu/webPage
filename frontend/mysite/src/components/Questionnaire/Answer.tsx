import React from 'react'
import styles from './../../styles/Questionnaire/answer.module.scss';
import { useAppDispatch, useSelector } from '../../store';
import { question1Reducer, question2Reducer, question3Reducer } from './../../slices/questionSlice';

interface Props {
  text: string;
  rank: number;
  questionNumber: number;
}

export default function Answer(props:Props) {
  const questionInfo = useSelector((state) => state.questionInfo);
  console.log(questionInfo)
  const dispatch = useAppDispatch();
  const createBackGroundColor = () => {
    switch(props.questionNumber) {
      case 1: 
        if (questionInfo.question1 === props.rank) {
          return '#a0a0a0'
        } else {
          return  '#ffffff'
        }
    
      case 2: 
        if (questionInfo.question2 === props.rank) {
          return '#a0a0a0'
        } else {
          return  '#ffffff'
        }
    
      case 3: 
        if (questionInfo.question3 === props.rank) {
          return '#a0a0a0'
        } else {
          return  '#ffffff'
        }
    }
  } 
  const clickedStyle = {
    backgroundColor: createBackGroundColor(),
  };
  return (
    <div 
      className={styles.answerContainer} 
      style ={clickedStyle} 
      onClick={() => {
        switch(props.questionNumber) {
          case 1:
            dispatch(question1Reducer(props.rank));
            break;
          case 2: 
            dispatch(question2Reducer(props.rank));
            break;
          case 3: 
            dispatch(question3Reducer(props.rank));
            break;
          default:

            throw new Error('未対応のエラーです');
        }
      }}
    >
      <p className={styles.option}>{props.text}</p>
    </div>
  )
}
