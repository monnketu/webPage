import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './../../../styles/home/Form/form.module.scss';

const Form = () => {
  const navigate = useNavigate();
  const [space, setSpace] = useState('all');
  const [dropIn, setDropIn] = useState('all');
  const [time, setTime] = useState('');
  

  return (
    <div className= {styles.search_box}>
      <p className = {styles.search_sentence} >契約形態から探す</p>
      <select className = {styles.search_option} name="example" onChange={(e) => setSpace(e.target.value)}>
        <option value='all'>指定なし</option>
        <option value='cafe'>カフェ</option>
        <option value='coWorkingSpace'>コワーキングスペース</option>
      </select>
      {/* <input class = {styles.search_criteria} type = "text" placeholder="エリア・駅"/>
      <input class = {styles.search_criteria} type = "text" placeholder="キーワード・名前" /> */}
      <select className = {styles.search_option} name="example" onChange={(e) => setDropIn(e.target.value)}>
        <option value="all">指定なし</option>
        <option value='monthly'>月額契約</option>
        <option value='dropIn'>ドロップイン可能</option>
      </select>

      <input className = {styles.search_time} type = "time" onChange={(e) => setTime(e.target.value)}/>
      <button className = {styles.search_button} onClick={() => navigate('/search_result', {state:{space: space, dropIn: dropIn, time: time, searchedByForm: true}})}>検索</button>
    </div>
  )
}

export default Form;