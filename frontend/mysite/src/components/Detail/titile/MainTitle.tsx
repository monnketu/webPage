import React from 'react'
import styles from './../../../styles/Detail/title/mainTitle.module.scss';

interface Props {
  name: string;
  className? :string;
}
export default function MainTitle(props: Props) {
  return (
    <p className = {props.className ? styles[props.className] :styles.mainTitle}>{props.name}</p>
  )
}
