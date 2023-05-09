import React from 'react'
import Aria from './AriaInfo'
import styles from './../../../../../styles/home/main/searcher/searchAria/searchAria.module.scss';
import AREA23 from '../../../../../consts/Aria23';

export default function SearchAria() {
  

  return (
    <div className = {styles.search_aria_container}>
      <p className = {styles.search_aria_sentence}>エリアから探す</p>
      <div className = {styles.popular_arias}>
        <div className = {styles.aria_info_wrapper}>
          {/* <ul className = {styles.aria_info_list}>
            {arias1.map((aria, index) => <li key={index}><Aria aria={aria}/></li>)}
          </ul>
      
          <ul className = {styles.aria_info_list2}>
            {arias2.map((aria, index) => <li key={index}><Aria aria={aria}/></li>)}
          </ul> */}
          {Array(Math.ceil(AREA23.length / 3)).fill('').map((_, index) => {
            return (
              Array(3).fill('').map(() => {
                return ( 
                  <ul className = {styles.aria_info_list}>
                    {<li key={index} className={styles.aria_li}><Aria aria={AREA23[index]}/></li>}
                  </ul>
                )
              })
            )
          })}
        </div>
      </div>
    </div> 
  )
}
