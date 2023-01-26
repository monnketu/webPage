import React from "react";

const Form = (props) => {
  return (
    <div className= "search-box">
      <p className = "search-sentence" >場所、日時から探す</p>
      <input class = "search-criteria" type = "text" placeholder="エリア・駅"/>
      <input class = "search-criteria" type = "text" placeholder="キーワード・名前" />
      <select class = "search-option" name="example">
        <option value="">選択して下さい</option>
        <option>月額契約</option>
        <option>ドロップイン可能</option>
      </select>
      <input className = "search-date" type = "date" />
      <input className = "search-time" type = "time" />
      <button className ="search-button">検索</button>
    </div>
  )
}

export default Form;