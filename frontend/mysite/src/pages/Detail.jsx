import React from 'react'
import Header from '../components/Detail/Header'
import styles from '../styles/Detail/detail.module.scss';
import { useLocation } from 'react-router-dom';
export default function Detail(props) {
  const location = useLocation();
  const info = location.state;
  return (
    <div className={styles.detail}>
      <Header info={info}/>
    </div>
  )
}
