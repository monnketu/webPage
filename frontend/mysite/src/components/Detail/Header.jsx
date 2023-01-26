import React from 'react'
import styles from '../../styles/Detail/header.module.scss';

export default function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerImage} src={`/img/${props.imageName ? props.imageName : 'shibuya'}.jpeg`} alt='詳細のヘッダー画像'/>
      <p className = {styles.header}>{props.info.name}</p>
    </div>
  )
}
