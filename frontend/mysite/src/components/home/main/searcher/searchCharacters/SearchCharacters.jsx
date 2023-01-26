import React from 'react'
import Character from './Character';
import styles from './../../../../../styles/home/main/searcher/searchCharacters/searchCharacters.module.scss';
export default function SearchCharacters() {
  const params1 = [
    {
      image: 'wifi',
      dispName: '高速wi-fi'
    },
    {
      image: 'money',
      dispName: '低価格'
    },
    {
      image: 'meetingroom',
      dispName: '広々会議室'
    },
  ];
  const params2 = [
    {
      image: 'printer',
      dispName: '充実オプション'
    },
    {
      image: 'dropin',
      dispName: 'ドロップイン可能'
    },
    {
      image: 'clock',
      dispName: '24時間制'
    },
  ];
  return (
    <>
      <p className = {styles.search_character_sentence}>特徴から探す</p>
      <div className = {styles.popular_characters}>
        <div className = {styles.character_info_wrapper}>
          <ul className = {styles.character_info_list}> 
            {params1.map(param => <li><Character info={param}/></li>)}
          </ul>
      
          <ul className = {styles.character_info_list2}> 
            {params2.map(param => <li><Character info={param}/></li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
