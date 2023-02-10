import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../home/main/LINE_Login';
import styles from './../../styles/header/header.module.scss';

export default function Header() {
  return (
    <ul className = {styles.menu_bar}>
      <li className = {styles.menu_start}><Link className = "menu-link" to = "/">トップページ</Link></li>
      <li className = {styles.menu_start}><Link className = {styles.menu_link} to = "/how_to_use">特徴と使い方</Link></li>
      {/* <li className = {styles.menu}><Link className = {styles.menu_link} href = "/favorite">お気に入り</Link></li> */}
      {/* <li className = {styles.menu}><Link className = {styles.menu_link} to = "/login">会員登録/ログイン</Link></li> */}
      <li className = {styles.menu}><Login /></li>
    </ul>
  )
}
