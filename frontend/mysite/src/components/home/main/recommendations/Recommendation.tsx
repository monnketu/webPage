import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './../../../../styles/home/main/recommendations/recommendation.module.scss';
import Answer from '../../../Questionnaire/Answer';
import DBdata from '../../../../interfaces/DB/DBdata';

interface Props {
  rank: number;
  spaceInfo: DBdata | undefined;
  answer: number[]
}
export default function Recommendation(props: Props) {
  return (
    <>
      <img className = {styles.space_rank} src={`img/${props.rank}rd_image.jpeg`} alt='一位'/>
      <Link className = {styles.popular_space_info} to = "/detail" state={props.spaceInfo}>
        <img className = {styles.popular_space_image} src={`/img/coWorkingSpace_images/${props.spaceInfo ? props.spaceInfo.imageName : 'image1.jpeg'}`} alt='space1'/>
        {/* 以下は将来的にスペースの名前を表示させる */}
        <p className = {styles.popular_space_name}>{props.spaceInfo ? props.spaceInfo.name : '不明'}</p>
        
      </Link>
    </>
  )
}
