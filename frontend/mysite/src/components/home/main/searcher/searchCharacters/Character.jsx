import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../../../../styles/home/main/searcher/searchCharacters/character.module.scss';

export default function Character(props) {
  return (
    <Link className = {styles.character_info} to = "/polls">
      <img className = {styles.character_image} src = {`/img/${props.info.image}.jpeg`} alt={props.dispName}/>
      <p className = {styles.character_name}>{props.info.dispName}</p>
    </Link> 
  )
}
