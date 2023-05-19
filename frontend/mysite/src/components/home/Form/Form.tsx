import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './../../../styles/home/Form/form.module.scss';
import { useSelector, useAppDispatch } from "../../../store";
import { spaceReducer, dropInReducer, timeReducer, stationReducer, priceReducer } from "../../../slices/formSlice";
import  { BusinessForm, StateInterface } from "../../../interfaces/";
import DropInOptions from "./DropInOptions";
import { businessForms } from '../../../consts/searchOption';
import { BusinessFormOption } from "../../../types/Option";
export interface StateOfFormToSearchResult {
  state: {
    space: string;
    businessForm: BusinessFormOption;
    time: string;
    price: number;
    station: string;
    searchedByForm: boolean;
  }
}
const Form = () => {
  const navigate = useNavigate();
  // const [space, setSpace] = useState('all');
  // const [dropIn, setDropIn] = useState('all');
  // const [time, setTime] = useState('');
  const dispatch = useAppDispatch();
  const dropInRef= useRef<any>();
  const stationRef = useRef<any>();
  const timeRef = useRef<any>();
  const priceRef = useRef<any>();
  const space = useSelector((state: StateInterface) => state.formInfo.space)
  const businessForm = useSelector((state: StateInterface) => state.formInfo.businessForm)
  const time = useSelector((state: StateInterface) => state.formInfo.time)
  const price = useSelector((state: StateInterface) => state.formInfo.price)
  const selectedBusinessForm:BusinessFormOption = dropInRef.current ? dropInRef.current[dropInRef.current.options.selectedIndex].value: '';
  

  const state: StateOfFormToSearchResult = {
    state:{
      space: space,
      businessForm: selectedBusinessForm, 
      time: timeRef.current? timeRef.current.value: '', 
      price: priceRef.current ? priceRef.current[priceRef.current.options.selectedIndex].value: '', 
      station: stationRef.current ? stationRef.current.value: '',
      searchedByForm: true, // Formの検索ボタン押下かどうか
    }
  }
  return (
    <div className= {styles.search_box}>
      <p className = {styles.search_sentence} >条件で探す</p>
      {/* <p className = {styles.search_sentence} >場所、日時から探す</p> */}
      <select className = {styles.search_option} name="example" ref={dropInRef} onChange={(e) => dispatch(dropInReducer(dropInRef.current[dropInRef.current.options.selectedIndex].value))}>
        <option value={businessForms.all} selected={businessForm === businessForms.all}>指定なし</option>
        <option value={businessForms.monthly} selected={businessForm === businessForms.monthly}>月額契約タイプ</option>
        <option value={businessForms.dropin_1day} selected={businessForm === businessForms.dropin_1day}>ドロップインタイプ(1day)</option>
        <option value={businessForms.dropin_1hour} selected={businessForm === businessForms.dropin_1hour}>ドロップインタイプ(1hour)</option>
      </select>
      <DropInOptions type={businessForm} priceRef={priceRef} />
 
      <input className = {styles.search_time} type = "text"  ref={stationRef} placeholder='駅名 (例: 池袋)' />
      <input className = {styles.search_time} type = "time"  ref={timeRef} />
      <button 
        className = {styles.search_button} 
        onClick={() => {
          dispatch(timeReducer(timeRef.current.value));
          dispatch(stationReducer(stationRef.current.value));
          dispatch(priceReducer(priceRef.current[priceRef.current.options.selectedIndex].value));
          navigate('/search_result', state);
        }}>検索</button>
    </div>
  )
}

export default Form;