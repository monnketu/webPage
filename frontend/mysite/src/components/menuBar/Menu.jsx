import React from "react";
import { Link } from 'react-router-dom';
import styles from './../../styles/menuBar/menu.module.scss';
const Menu = (props) => {
  // 三項演算子 (変数名) = (条件) ? (条件がtrueのときの値) : (条件がfalseの時の値)
  // const MenuClassName = props.MenuClassName ? props.MenuClassName : "menu-link"; 

  // 以下のように呼び出されることを想定
  // <Menu MenuClassName='menu-link-start' To = '/how_to_use' name='特徴と使い方'/>

  // その結果Menuのpropsは以下のような辞書型になる
  // props = {
  //   To: '/how_to_use',
  //   name: '特徴と使い方
  // }


  return(
    <Link className = {styles.menuLink} to = {props.To}>{props.name}{props.last ? null : '|'}</Link>
  )
}

export default Menu; // デフォルトエクスポート

// export { Menu } 名前付きエクスポート