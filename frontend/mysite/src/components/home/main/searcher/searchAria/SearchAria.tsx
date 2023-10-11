import React from 'react'
import Area from './AreaInfo'
import styles from './../../../../../styles/home/main/searcher/searcharea/searchArea.module.scss';
import AREA23 from '../../../../../consts/Area23';

export default function Searcharea() {
  

  return (
    <div className = {styles.search_area}>
      <p className = {styles.search_area__sentence}>エリアから探す</p>
      {/* <div className = {styles.search_areas}> */}
        <div className = {styles.areas_container}>
          {Array(Math.ceil(AREA23.length / 3)).fill('').map((_, index) => {
            return (
              <ul className = {styles.areas_list}>
                {Array(3).fill('').map((_, i) => {
                  return ( 
                    <li key={index} className={styles.areas_list__item}><Area area={AREA23[3*index + i]}/></li>
                    )
                })}
              </ul>
            )
          })}
        </div>
      {/* </div> */}
    </div> 
  )
}
