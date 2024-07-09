import React from 'react'
import SearchArea from './searchAria/SearchAria';
import SearchCharacters from './searchCharacters/SearchCharacters';
import styles from './../../../../styles/home/main/searcher/searcher.module.scss';

export default function Searcher() {
  return (
    <div className = {styles.search_area_container}>
      <SearchArea />
      <SearchCharacters />
    </div>
  )
}
