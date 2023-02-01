import React from 'react'
import styles from './../../../styles/Detail/title/mainTitle.module.scss';

interface Props {
  name: string;
}
export default function MainTitle(props: Props) {
  return (
    <p className = {styles.mainTitle}>{props.name}</p>
  )
}
