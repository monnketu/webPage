import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './../../../styles/home/Form/form.module.scss';
import { useSelector, useAppDispatch } from "../../../store";
import { spaceReducer, dropInReducer, timeReducer, stationReducer, priceReducer } from "../../../slices/formSlice";
import StateInterface from "../../../interfaces/State";
const Form = () => {
  const PRICE_CAP  = 999999 // 月額価格の最高値 InfinityだとJSON.stringifyでnullになることを確認した
  const navigate = useNavigate();
  // const [space, setSpace] = useState('all');
  // const [dropIn, setDropIn] = useState('all');
  // const [time, setTime] = useState('');
  const dispatch = useAppDispatch();
  const dropInRef = useRef<any>();
  const stationRef = useRef<any>();
  const timeRef = useRef<any>();
  const priceRef = useRef<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const space = useSelector((state: StateInterface) => state.formInfo.space)
  const isDropIn = useSelector((state: StateInterface) => state.formInfo.dropIn)
  const time = useSelector((state: StateInterface) => state.formInfo.time)
  const price = useSelector((state: StateInterface) => state.formInfo.price)
  return (
    <div className= {styles.search_box}>
      <p className = {styles.search_sentence} >条件で探す</p>
      {/* <p className = {styles.search_sentence} >場所、日時から探す</p> */}
      <select className = {styles.search_option} name="example" ref={dropInRef}>
        <option value="all" selected={isDropIn === 'all'}>指定なし</option>
        <option value='monthly' selected={isDropIn === 'monthly'}>月額契約</option>
        <option value='dropIn' selected={isDropIn === 'dropIn'}>ドロップイン可能</option>
      </select>
      <select className = {styles.search_option} name="price" ref={priceRef}>
        <option value={'1'} selected={price === '1'}>1万円未満</option>
        <option value={'3'} selected={price === '3'}>1万円以上〜3万円未満</option>
        <option value={'5'} selected={price === '5'}>3万円以上〜5万円未満</option>
        <option value={'infty'} selected={price === 'infty'}>5万円以上</option>
      </select>

      <input className = {styles.search_time} type = "text"  ref={stationRef}/>
      <input className = {styles.search_time} type = "time"  ref={timeRef} />
      <button 
        className = {styles.search_button} 
        onClick={() => {
          dispatch(dropInReducer(dropInRef.current[dropInRef.current.options.selectedIndex].value))
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