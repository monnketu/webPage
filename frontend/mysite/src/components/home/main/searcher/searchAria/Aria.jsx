import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../../../../styles/home/main/searcher/searchAria/aria.module.scss';
export default function Aria(props) {
  return (
    <Link className = {styles.aria_info} to = "/search_result" state={{info: props.aria}}>
      <img className = {styles.aria_image} src={`/img/${props.aria.en}.jpeg`} alt={`${props.aria.ja}の写真`} />
      <p className = {styles.aria_name}>{props.aria.ja}</p>
    </Link>
  )
}
