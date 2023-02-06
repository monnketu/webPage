import React from "react";
import styles from './../../../styles/Detail/review/postReview.module.scss';
import UseInput from "./inputUI/TextField";
import UnstyledInputBasic from './inputUI/MultiInput';
import { Button } from "@mui/material";

export default function PostReview() {
  return (
    <div className={styles.postReviewWrapper}>
      <h3>タイトル</h3>
      <UseInput/>
      <h3>本文</h3>
      <UnstyledInputBasic />
      <Button  variant="contained" sx={{width: '15%', fontSize: '0.5rem', padding: 'auto'}}>送信する</Button>
    </div>
  )
}
