import React from 'react';
import styles from './../../../styles/searchResult/sideMenu/searchOptionBox.module.scss';

// props = {
//   label1: 'keyword',
//   options: ['option1', 'option2', 'option3'],
// }
const SearchOptionBox = (props) => {
  return (
    <div className={styles.searchBoxContainer}>
      <label htmlFor={styles.keyWordSearch}>{props.label1}から探す</label><br />
      <select id ={styles.keyWordSearch}>
        {props.options.map((option, index) => {
          // options[index] == option
          return(
            <option value={option} key={index}>{option}</option>
          )
          })
        }
      </select>

    </div>
  )
}
export default SearchOptionBox;