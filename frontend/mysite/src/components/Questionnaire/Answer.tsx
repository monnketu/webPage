import React from 'react'
import styles from './../../styles/Questionnaire/answer.module.scss';
interface Props {
  text: string;
  rank: number;
}
export default function Answer(props:Props) {
  const [clicked, setClicked] = React.useState(false);
  const clickedStyle = {
    backgroundColor: clicked? '#a0a0a0' : '#ffffff',
  }
  return (
    <div className={styles.answerContainer} style ={clickedStyle} onClick={() => setClicked(!clicked)}>
      <p className={styles.option}>{props.text}</p>
    </div>
  )
}
