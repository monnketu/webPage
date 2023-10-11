import React from 'react'
import { Link } from 'react-router-dom'
import styles from './../../../../../styles/home/main/searcher/searcharea/area.module.scss';
import Area from '../../../../../interfaces/form/Area';

interface Props {
  area: Area;
}
export default function areaInfo(props: Props) {
  return (
    <Link className = {styles.area_info} to = "/search_result" state={{info: props.area}}>
      <img className = {styles.area_image} src={`/img/${props.area.name.en}.jpeg`} alt={`${props.area.name.ja}の写真`} />
      {/* <img className = {styles.area_image} src={`/img/image1.jpeg`} alt={`${props.area.ja}の写真`} /> */}
      <p className = {styles.area_name}>{props.area.name.ja}</p>
    </Link>
  )
}
