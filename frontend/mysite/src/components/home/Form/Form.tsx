import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './../../../styles/home/Form/form.module.scss';
import { useSelector, useAppDispatch } from "../../../store";
import { spaceReducer, dropInReducer, timeReducer } from "../../../slices/formSlice";
import StateInterface from "../../../interfaces/State";
const Form = () => {
  const navigate = useNavigate();
  // const [space, setSpace] = useState('all');
  // const [dropIn, setDropIn] = useState('all');
  // const [time, setTime] = useState('');
  const dispatch = useAppDispatch()
  const space = useSelector((state: StateInterface) => state.formInfo.space)
  const isDropIn = useSelector((state: StateInterface) => state.formInfo.dropIn)
  const time = useSelector((state: StateInterface) => state.formInfo.time)
  console.log(useSelector(state => state));
  return (
    <div className= {styles.search_box}>
      <p className = {styles.search_sentence} >契約形態、時間から探す</p>
      {/* <p className = {styles.search_sentence} >場所、日時から探す</p> */}
      <select className = {styles.search_option} name="example" onChange={(e) => dispatch(dropInReducer(e.target.value))}>
        <option value="all">指定なし</option>
        <option value='monthly'>月額契約</option>
        <option value='dropIn'>ドロップイン可能</option>
      </select>

      <input className = {styles.search_time} type = "time" onChange={(e) => dispatch(timeReducer(e.target.value))}/>
      <button className = {styles.search_button} onClick={() => navigate('/search_result', {state:{space: space, dropIn: isDropIn, time: time, searchedByForm: true}})}>検索</button>
    </div>
  )
}

export default Form;