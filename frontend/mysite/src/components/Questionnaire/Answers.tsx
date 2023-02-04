import React, { useState } from 'react'
import Answer from './Answer';
import styles from './../../styles/Questionnaire/answers.module.scss';
export default function Answers() {
   const [clickedList, setClickedList] = useState(Array(5).fill(0).map(() => false));
   console.log(clickedList);
  return (
    <div className={styles.answersContainer}>
      <Answer text={'そう思う'} rank={4} />
      <Answer text={'あまりそう思わない'} rank={3} />
      <Answer text={'価格'} rank={2} />
      <Answer text={'価格'} rank={1} />
      <Answer text={'価格'} rank={0} />
    </div>
  )
}
