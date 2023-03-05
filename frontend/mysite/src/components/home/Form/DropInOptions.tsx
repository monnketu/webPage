import React, { useRef, useState } from "react";
import { useSelector } from "../../../store";
import StateInterface from '../../../interfaces/State';
import styles from './../../../styles/home/Form/form.module.scss';

export default function DropInOptions({type, priceRef}) {
  const price = useSelector((state: StateInterface) => state.formInfo.price);
  switch(type) {
    case 'all':
      return ( 
        <select className = {styles.search_option} name="price" ref={priceRef}>
          <option value={'all'}>指定なし</option>
          <option value={'10000'} selected={price === '10000'}>1万円未満</option>
          <option value={'30000'} selected={price === '30000'}>1万円以上〜3万円未満</option>
          <option value={'50000'} selected={price === '50000'}>3万円以上〜5万円未満</option>
          <option value={'infty'} selected={price === 'infty'}>5万円以上</option>
        </select>
      );
      case 'monthly':
        return ( 
          <select className = {styles.search_option} name="price" ref={priceRef}>
            <option value={'all'}>指定なし</option>
            <option value={'10000'} selected={price === '10000'}>1万円未満</option>
            <option value={'30000'} selected={price === '30000'}>1万円以上〜3万円未満</option>
            <option value={'50000'} selected={price === '50000'}>3万円以上〜5万円未満</option>
            <option value={'infty'} selected={price === 'infty'}>5万円以上</option>
          </select>
        );
      case 'dropIn_1day':
        return ( 
          <select className = {styles.search_option} name="price" ref={priceRef}>
            <option value={'all'}>指定なし</option>
            <option value={'2000'} selected={price === '2000'}>2千円未満</option>
            <option value={'3000'} selected={price === '3000'}>2千円以上〜3千円未満</option>
            <option value={'4000'} selected={price === '4000'}>3千円以上〜4千円未満</option>
            <option value={'infty'} selected={price === 'infty'}>4千円以上</option>
          </select>
        );
        case 'dropIn_1hour':
          return ( 
            <select className = {styles.search_option} name="price" ref={priceRef}>
              <option value={'all'}>指定なし</option>
              <option value={'500'} selected={price === '500'}>5百円未満</option>
              <option value={'600'} selected={price === '600'}>5百円円以上〜6百円未満</option>
              <option value={'700'} selected={price === '700'}>6百円以上〜7百円未満</option>
              <option value={'infty'} selected={price === 'infty'}>7百円以上</option>
            </select>
          );
        default:
          return null;
  }
}
