import React, { useState, useEffect } from 'react'
import Header from '../components/Detail/Header'
import styles from '../styles/Detail/detail.module.scss';
import { useLocation } from 'react-router-dom';
import SubTitle from '../components/Detail/titile/SubTitle';
import SpaceDetail from '../components/Detail/Main/SpaceDetail';
import Reviews from '../components/Detail/review/Reviews';
import PostReview from '../components/Detail/review/PostReview';
import { useSelector } from '../store';
import { StateInterface } from '../interfaces/';

export default function Detail() {
  useEffect(() => {
    window.scroll({top: 0, behavior: 'auto'})
  },[])
  const location = useLocation();
  const info = location.state;
  console.log(info,'info');
  const userInfo = useSelector((state:StateInterface) => state.userInfo);
  return (
    <div className={styles.detail}>
      <Header info={info}/>
      <SubTitle name={'詳細'}/>
      <SpaceDetail spaceInfo={info}/>
      <SubTitle name={'口コミ一覧'}/>
      <Reviews spaceInfo={info}/>
      <SubTitle name={'口コミを書く'}/>
      <PostReview spaceInfo={info}/> 
    </div>
  )
}
