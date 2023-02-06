import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './../../styles/Questionnaire/diagnoseButton.module.scss';
import { useAppDispatch } from '../../store';
import { diagnoseFinishReducer } from '../../slices/questionSlice';
export default function DiagnoseButton() {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(diagnoseFinishReducer());
  }
  return (
    <Button variant="contained" className={styles.diagnoseButton} onClick={clickHandler}>結果を表示する</Button>
  );
}
