import React from 'react'
import Aria from './AriaInfo'
import styles from './../../../../../styles/home/main/searcher/searchAria/searchAria.module.scss';
export default function SearchAria() {
  const arias23 = [
    [

      {
        ja:'足立区',
        en:'adachi'
      },
      {
        ja:'荒川区',
        en: 'arakawa'
      },
      {
        ja:'板橋区',
        en: 'itabashi'
      },
    ],
    [
      {
        ja:'江戸川区',
        en: 'edogawa'
      },
      {
        ja:'大田区',
        en: 'ota'
      },
      {
        ja:'葛飾区',
        en: 'katsushika'
      },
    ],
    [
      {
        ja:'北区',
        en: 'kita'
      },
      {
        ja:'江東区',
        en: 'koutou'
      },
      {
        ja:'品川区',
        en: 'shinagawa'
      },
    ],
    [
      {
        ja:'渋谷区',
        en: 'shibuya'
      },
      {
        ja:'新宿区',
        en: 'shinjuku'
      },
      {
        ja:'杉並区',
        en: 'suginami'
      },
    ],
    [
      {
        ja:'墨田区',
        en: 'sumida'
      },
      {
        ja:'世田谷区',
        en: 'setagaya'
      },
      {
        ja:'台東区',
        en: 'taito'
      },
    ],
    [
      {
        ja:'中央区',
        en: 'chuo'
      },
      {
        ja:'千代田区',
        en: 'chiyoda'
      },
      {
        ja:'豊島区',
        en: 'toyoshima'
      },
    ],
    [
      {
        ja:'中野区',
        en: 'nakano'
      },
      {
        ja:'練馬区',
        en: 'nerima'
      },
      {
        ja:'文京区',
        en: 'bunkyo'
      },
    ],
    [
      {
        ja:'港区',
        en: 'minato'
      },
      {
        ja:'目黒区',
        en: 'meguro'
      },
      {
        ja: 'その他',
        en: 'others'
      },
    ],
  ];

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
          {arias23.map(arias => {
            return (
              <ul className = {styles.aria_info_list}>
                {arias.map((aria, index) => <li key={index}><Aria aria={aria}/></li>)}
              </ul>
            )
          })}
        </div>
      </div>
    </div> 
  )
}
