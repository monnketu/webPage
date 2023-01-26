import React from "react";
import styles from './../../../styles/home/Form/form.module.scss';

const Form = (props) => {
  return (
    <div className= {styles.search_box}>
      <p className = {styles.search_sentence} >場所、日時から探す</p>
      <label htmlFor="cafe" className={styles.radioButtonLabel}>カフェ</label>
      <input id='cafe' type='radio' name='cafeORcoWokingSpace'/>
      <label htmlFor="coWorkingSpace" className={styles.radioButtonLabel}>コワーキングスペース</label>
      <input id='coWorkingSpace' type='radio' name='cafeORcoWokingSpace'/>
      {/* <input class = {styles.search_criteria} type = "text" placeholder="エリア・駅"/>
      <input class = {styles.search_criteria} type = "text" placeholder="キーワード・名前" /> */}
      <select className = {styles.search_option} name="example">
        <option value="">選択して下さい</option>
        <option>月額契約</option>
        <option>ドロップイン可能</option>
      </select>
      <input className = {styles.search_date} type = "date" />
      <input className = {styles.search_time} type = "time" />
      <button className = {styles.search_button}>検索</button>
    </div>
  )
}

export default Form;