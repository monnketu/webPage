import React from 'react'
import styles from './../../../styles/Detail/title/mainTitle.module.scss';

export default function MainTitle(props) {
  return (
    <p className = {styles.mainTitle}>{props.name}</p>
  )
}
