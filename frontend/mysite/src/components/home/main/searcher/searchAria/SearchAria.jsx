import React from 'react'
import { Link } from 'react-router-dom'
import Aria from './Aria'
import styles from './../../../../../styles/home/main/searcher/searchAria/searchAria.module.scss';
export default function SearchAria() {
  const arias1 = [
    {
      ja:'渋谷',
      en:'shibuya'
    },
    {
      ja:'新宿',
      en: 'shinjuku'
    },
    {
      ja:'池袋',
      en: 'ikebukuro'
    },

  ];
  const arias2 = [
    {
      ja:'東京',
      en: 'tokyo'
    },
    {
      ja:'品川',
      en: 'sinagawa'
    },
    {
      ja:'その他',
      en: 'others'
    },
  ]
  return (
    <div className = {styles.search_aria_container}>
      <p className = {styles.search_aria_sentence}>エリアから探す</p>
      <div className = {styles.popular_arias}>
        <div className = {styles.aria_info_wrapper}>
          <ul className = {styles.aria_info_list}>
            {arias1.map((aria) => <li><Aria aria={aria}/></li>)}
          </ul>
      
          <ul className = {styles.aria_info_list2}>
            {arias2.map((aria) => <li><Aria aria={aria}/></li>)}
          </ul>
        </div>
      </div>
    </div> 
  )
}
