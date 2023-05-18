import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../../../../styles/home/main/searcher/searchCharacters/character.module.scss';
import type { CharaParam } from '../../../../../interfaces';

interface Props {
  charaParam: CharaParam
}

export default function Character(props: Props) {
  return (
    <Link className = {styles.character_info} to = "/search_result" state={props.charaParam}>
      <img className = {styles.character_image} src = {`/img/${props.charaParam.character}.jpeg`} alt={props.charaParam.name.ja}/>
      <p className = {styles.character_name}>{props.charaParam.name.ja}</p>
    </Link> 
  )
}
