import React from 'react'
import Character from './Character';
import styles from './../../../../../styles/home/main/searcher/searchCharacters/searchCharacters.module.scss';
export default function SearchCharacters() {
  const params1 = [
    {
      ja: '高速wi-fi',
      en: 'wifi',
      character: 'wifi',
      dispName: '高速wi-fi'
    },
    {
      ja: '低価格',
      en: 'low_cost',
      character: 'money',
      dispName: '低価格'
    },
    {
      ja: '広々会議室',
      en: 'meeting_room',
      character: 'meetingroom',
      dispName: '広々会議室'
    },
  ];
  const params2 = [
    {
      ja: '充実オプション',
      en: 'enhanced_options',
      character: 'printer',
      dispName: '充実オプション'
    },
    {
      ja: 'ドロップイン可能',
      en: 'dropIn',
      character: 'dropin',
      dispName: 'ドロップイン可能'
    },
    {
      ja: '24時間制',
      en: 'all_time',
      character: 'clock',
      dispName: '24時間制'
    },
  ];
  return (
    <>
      <p className = {styles.search_character_sentence}>特徴から探す</p>
      <div className = {styles.popular_characters}>
        <div className = {styles.character_info_wrapper}>
          <ul className = {styles.character_info_list}> 
            {params1.map((param, index) => <li key={index}><Character info={param}/></li>)}
          </ul>
      
          <ul className = {styles.character_info_list2}> 
            {params2.map((param, index) => <li key={index}><Character info={param}/></li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
