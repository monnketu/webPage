import React from 'react'
import Character from './Character';
import CharaParam from '../../../../../interfaces/coWorkingSpace/coWorkingSpaceCharaParam';
import styles from './../../../../../styles/home/main/searcher/searchCharacters/searchCharacters.module.scss';

export default function SearchCharacters() {
  const params1: CharaParam[] = [
    {
      name: {
        ja: '高速wi-fi',
        en: 'wifi',
      },
      character: 'wifi',
    },
    {
      name: {
        ja: '低価格',
        en: 'low_cost',
      },
      character: 'low_cost',
    },
    {
      name: {
        ja: '広々会議室',
        en: 'meeting_room',
      },
      character: 'meeting_room',
    },
  ];
  const params2:CharaParam[] = [
    {
      name: {
        ja: '充実オプション',
        en: 'enhanced_options',
      },
      character: 'enhanced_options',
    },
    {
      name: {
        ja: 'ドロップイン可能',
        en: 'dropIn',
      },
      character: 'dropIn',
    },
    {
      name: {
        ja: '24時間制',
        en: 'all_time',
      },
      character: 'all_time',
    },
  ];
  return (
    <>
      <p className = {styles.search_character_sentence}>特徴から探す</p>
      <div className = {styles.popular_characters}>
        <div className = {styles.character_info_wrapper}>
          <ul className = {styles.character_info_list}> 
            {params1.map((param, index) => <li key={index}><Character charaParam={param}/></li>)}
          </ul>
      
          <ul className = {styles.character_info_list2}> 
            {params2.map((param, index) => <li key={index}><Character charaParam={param}/></li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
