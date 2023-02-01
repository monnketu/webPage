import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../../../styles/home/main/recommendations/recommendation.module.scss';

interface Props {
  rank: number;
  img: string;
}
export default function Recommendation(props: Props) {
  return (
    <>
      <img className = {styles.space_rank} src={`img/${props.rank}rd_image.jpeg`} alt='一位'/>
      <a className = {styles.popular_space_info} href = "/polls">
        <img className = {styles.popular_space_image} src={`/img/${props.img}.jpeg`} alt='space1'/>
        {/* 以下は将来的にスペースの名前を表示させる */}
        <p className = {styles.popular_space_name}>space{props.rank}</p>
      </a>
    </>
  )
}
