import React, { useState, useEffect } from 'react'
import Header from '../components/Detail/Header'
import styles from '../styles/Detail/detail.module.scss';
import { useLocation } from 'react-router-dom';
import SubTitle from '../components/Detail/titile/SubTitle';
import SpaceDetail from '../components/Detail/Main/SpaceDetail';
export default function Detail(props) {
  const location = useLocation();
  const info = location.state;
  console.log(info);
  return (
    <div className={styles.detail}>
      <Header info={info}/>
      <SubTitle name={'詳細'}/>
      <SpaceDetail spaceInfo={info}/>
    </div>
  )
}
