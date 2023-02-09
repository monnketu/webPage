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
  console.log(questionInfo, props)
  const dispatch = useAppDispatch();
  const createBackGroundColor = () => {
    switch(props.questionNumber) {
      case 1: 
         {
          switch(props.rank) {
            case 5: return '#e9967a';
            case 3: return '#ffdead';
            case 1: return '#fffacd';
            case 1/3: return '#ffdead';
            case 1/5: return '#e9967a';
          }
          return  '#ffdead'
        }
    
      case 2: 
        switch(props.rank) {
          case 5: return '#e9967a';
          case 3: return '#ffdead';
          case 1: return '#fffacd';
          case 1/3: return '#ffdead';
          case 1/5: return '#e9967a';
        }
        break;

      case 3: 
        switch(props.rank) {
          case 5: return '#e9967a';
          case 3: return '#ffdead';
          case 1: return '#fffacd';
          case 1/3: return '#ffdead';
          case 1/5: return '#e9967a';
        }
    }
  }
  const clickedStyle = {
    backgroundColor: createBackGroundColor(),
    // opacity: questionInfo.question2 === props.rank ? 0.5 : 1,
    opacity: props.questionNumber === 1 && questionInfo.question1 === props.rank ? 0.5 : 
              (props.questionNumber === 2 && questionInfo.question2 === props.rank ? 0.5 : (
                props.questionNumber === 3 && questionInfo.question3 === props.rank ? 0.5 : 1
              )),
    border: 'solid',
    borderWidth: 1
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
