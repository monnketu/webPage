import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './../../styles/Questionnaire/diagnoseButton.module.scss';
import { useAppDispatch, useSelector } from '../../store';
import { diagnoseFinishReducer } from '../../slices/questionSlice';
import DBdata from '../../interfaces/DB/DBdata';
import { recommendReducer } from '../../slices/recommendSlice';
import SPMI from '../../SPMI';

export default function DiagnoseButton() {
  const [isfullfilled, setIsfullfilled] = React.useState(true);
  const questionInfo = useSelector((state) => state.questionInfo)
  console.log(questionInfo, 'qinfo')
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    if (!Object.keys(questionInfo).filter((key) => key !== 'diagnose').map((key) => questionInfo[key]).includes(0)) {
      setIsfullfilled(true)
      const createScore_timeFromStation = (time:number) => {
        if (time < 5) {
          return 0.5;
        }
        else if (time >= 5 && time < 10) {
          return 0.4;
        }
        else {
          return 0.3
        }
      }
      const is24H = (start:string, end:string) => {
        if (start === '00:00:00' && end==='23:59:00') {
          return 1;
        }
        else {
          return 0;
        }
      }
      const isOption5 = (options:string) => {
        if (options.split(',').length >= 5) {
          // console.log(options.split(','))
          return 1;
        }
        else {
          return 0;
        }
      }
      const isDropIn = (dropin:boolean) => {
        return dropin === true ? 1 : 0 
      }
      const qMatrix = [
        [1, questionInfo.question1, 1/questionInfo.question3],
        [1/questionInfo.question1, 1, questionInfo.question2],
        [questionInfo.question3, 1/questionInfo.question2, 1]
      ];
      console.log(qMatrix);
  
      const w1 = Math.cbrt(qMatrix[0][0] * qMatrix[0][1] * qMatrix[0][2]); 
      const w2 = Math.cbrt(qMatrix[1][0] * qMatrix[1][1] * qMatrix[1][2]);
      const w3 = Math.cbrt(qMatrix[2][0] * qMatrix[2][1] * qMatrix[2][2]);
      console.log(questionInfo)
      console.log(w1);
      console.log(w2);
      console.log(w3);
      const PRICE_MIN = 8000;
      const PRICE_MAX = 60000;
      const ACCESS_MAX = 34200;
      const ACCESS_MIN = 4500;
      fetch('http://localhost:8000/api/coWorkingSpace/all/')
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        let score_index_list:Array<Array<number>> = [];
        const filteredData =res.results.filter((data:DBdata) => data.price >= PRICE_MIN && data.price <= PRICE_MAX);
        filteredData.forEach((data:DBdata, index:number) => {
          const w_alpha = (data.price - PRICE_MIN) / (PRICE_MAX - PRICE_MIN);
          const w_beta =  ((((SPMI[data.station] ? SPMI[data.station] : SPMI['その他']) * createScore_timeFromStation(data.timeFromStation)) - ACCESS_MIN) / (ACCESS_MAX - ACCESS_MIN));
          const w_gumma = (is24H(data.startTime, data.endTime) + isOption5(data.options) + isDropIn(data.isDropIn)) / 3;
          console.log(w_beta, data.station);
          score_index_list.push([w1 * w_alpha + w2 * w_beta + w3 * w_gumma, index]);
        });
        const sorted_score_Data = score_index_list.sort((val1, val2) => val2[0]  - val1[0]);
  
        console.log(filteredData[sorted_score_Data[1][1]], sorted_score_Data);
        dispatch(recommendReducer([filteredData[sorted_score_Data[0][1]],filteredData[sorted_score_Data[1][1]],filteredData[sorted_score_Data[2][1]]]));
        dispatch(diagnoseFinishReducer());
      });
    } else {
      setIsfullfilled(false);
      console.log('未選択');
    }
  }
  return (
    <>
      <Button variant="contained" className={styles.diagnoseButton} onClick={clickHandler}>結果を表示する</Button>
      {isfullfilled ? null : <p style={{color: 'red'}}>※選択していない項目があります</p>}
    </>
  );
}
