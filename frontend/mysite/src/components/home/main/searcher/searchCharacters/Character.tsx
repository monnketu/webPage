import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../../../../styles/home/main/searcher/searchCharacters/character.module.scss';
import Info from '../../../../../interfaces/coWorkingSpace/SpaceInfo';

interface Props {
  info: Info
}

export default function Character(props: Props) {
  return (
    <Link className = {styles.character_info} to = "/search_result" state={{info: props.info}}>
      <img className = {styles.character_image} src = {`/img/${props.info.character}.jpeg`} alt={props.info.dispName}/>
      <p className = {styles.character_name}>{props.info.dispName}</p>
    </Link> 
  )
}
