import React from 'react'
import styles from './../styles/Questionnaire/Questionnaire.module.scss';
import Answers from '../components/Questionnaire/Answers';
import DiagnoseButton from '../components/Questionnaire/DiagnoseButton';
export default function Questionnaire() {
  const questions = ['価格', '立地', '営業形態'];
  const sentenses = [[questions[0], questions[1]], [questions[1],questions[2]], [questions[2],questions[0]]]
  return (
    <div className={styles.QuestionnaireContainer}>
      {sentenses.map((sentense, index) => (
        <div key={index}>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '75%', margin: 'auto'}} >
            <h2 className={styles.question}>←{sentense[0]}</h2>
            <h2 className={styles.question}>{sentense[1]}→</h2>
          </div>
          <Answers questionNumber={index + 1} left={sentense[0]} right={sentense[1]}/>
        </div>
      ))}
      <DiagnoseButton />
    </div>
  )
}
