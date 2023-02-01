import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MainTitle from '../../Detail/titile/MainTitle';
import Form from '../Form/Form';
import Login from '../main/LINE_Login';
import styles from './../../../styles/home/header/header.module.scss';

const Header = () => {
  return (
    <div className = {styles.main_search_container}>
      <div className = {styles.second_header}>
        <img className = {styles.photo} src='/img/image2.jpeg' alt='header画像'/>
        <MainTitle name = '自由に働くをサポートする'/>
        <MainTitle name = 'フリースタイル' className='mainTitle2'/>
        <div className = {styles.message_wrapper}>
          <div className = {styles.message}>
           <p className = {styles.key_messgae} >いつでも、どこでも</p>
          </div>
        </div> 

        <div className = {styles.menu_container}>
          {/* <span className = {styles.title}>もんけつ</span> */}
          <ul className = {styles.menu_bar}>
            <li className = {styles.menu_start}><Link className = {styles.menu_link} to = "/how_to_use">特徴と使い方</Link></li>
            {/* <li className = {styles.menu}><Link className = {styles.menu_link} href = "/favorite">お気に入り</Link></li> */}
            <li className = {styles.menu}><Link className = {styles.menu_link} to = "/login">会員登録/ログイン</Link></li>
            <li className = {styles.menu}><Login /></li>
          </ul>
        </div>
      </div>
      <Form />
    </div>
  )
}
export default Header;
