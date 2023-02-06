import React, { useState } from "react";
import styles from './../../../styles/Detail/review/postReview.module.scss';
import UseInput from "./inputUI/TextField";
import UnstyledInputBasic from './inputUI/MultiInput';
import { Button } from "@mui/material";
import { useSelector, useAppDispatch } from "../../../store";
import StateInterface from '../../../interfaces/State';
export default function PostReview() {
  const userInfo = useSelector((state:StateInterface) => state.userInfo);
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  const sendHandler = (e) => {
    console.log(userInfo);
    console.log(title);
    console.log(review);
    fetch('http://192.168.0.166:8000/polls/postReview/', {
      method: 'POST',
      body: JSON.stringify({title: title, memberID: userInfo.userID, review: review})
    })
    .then(res => res.json())
    .then(res => console.log(res,'res'))
  }
  return (
    <div className={styles.postReviewWrapper}>
      <h3>タイトル</h3>
      <UseInput setTitle={setTitle}/>
      <h3>本文</h3>
      <UnstyledInputBasic setReview={setReview}/>
      <Button  variant="contained" className={styles.postButton} onClick = {sendHandler}>送信する</Button>
    </div>
  )
}
