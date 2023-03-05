import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './../../../styles/home/Form/form.module.scss';
import { useSelector, useAppDispatch } from "../../../store";
import { spaceReducer, dropInReducer, timeReducer, stationReducer, priceReducer } from "../../../slices/formSlice";
import StateInterface from "../../../interfaces/State";
import DropInOptions from "./DropInOptions";
const Form = () => {
  const navigate = useNavigate();
  // const [space, setSpace] = useState('all');
  // const [dropIn, setDropIn] = useState('all');
  // const [time, setTime] = useState('');
  const dispatch = useAppDispatch();
  const dropInRef = useRef<any>();
  const stationRef = useRef<any>();
  const timeRef = useRef<any>();
  const priceRef = useRef<any>();
  const space = useSelector((state: StateInterface) => state.formInfo.space)
  const dropIn = useSelector((state: StateInterface) => state.formInfo.dropIn)
  const time = useSelector((state: StateInterface) => state.formInfo.time)
  const price = useSelector((state: StateInterface) => state.formInfo.price)
  return (
    <div className= {styles.search_box}>
      <p className = {styles.search_sentence} >条件で探す</p>
      {/* <p className = {styles.search_sentence} >場所、日時から探す</p> */}
      <select className = {styles.search_option} name="example" ref={dropInRef} onChange={(e) => dispatch(dropInReducer(dropInRef.current[dropInRef.current.options.selectedIndex].value))}>
        <option value="all" selected={dropIn === 'all'}>指定なし</option>
        <option value='monthly' selected={dropIn === 'monthly'}>月額契約タイプ</option>
        <option value='dropIn_1day' selected={dropIn === 'dropIn_1day'}>ドロップインタイプ(1day)</option>
        <option value='dropIn_1hour' selected={dropIn === 'dropIn_1hour'}>ドロップインタイプ(1hour)</option>
      </select>
      <DropInOptions type={dropIn} priceRef={priceRef} />
 
      <input className = {styles.search_time} type = "text"  ref={stationRef} placeholder='駅名 (例: 池袋)'/>
      <input className = {styles.search_time} type = "time"  ref={timeRef} />
      <button 
        className = {styles.search_button} 
        onClick={() => {
          dispatch(timeReducer(timeRef.current.value));
          dispatch(stationReducer(stationRef.current.value));
          dispatch(priceReducer(priceRef.current[priceRef.current.options.selectedIndex].value));
          navigate('/search_result', {
            state:{
              space: space, 
              dropIn: dropInRef.current[dropInRef.current.options.selectedIndex].value, 
              time: timeRef.current.value, 
              price: priceRef.current[priceRef.current.options.selectedIndex].value, 
              station: stationRef.current.value,
              searchedByForm: true,
            }});
        }}>検索</button>
    </div>
  )
}

export default Form;