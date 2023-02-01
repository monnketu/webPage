import React from "react"
import Menu from "./Menu";
import styles from './../../styles/menuBar/menuBar.module.scss';
const MenuBar = () => {
  return (
    <ul className = "menu-bar">
      <li className = {styles.menuStart}><Menu To='/how_to_use' name='特徴と使い方 '/></li>
      {/* <li className = {styles.menu}><Menu To='/favorite' name='お気に入り ' /></li>
      <li className = {styles.menu}><Menu To='/login' name=' 会員登録/ログイン' last={true}/></li> */}
    </ul>
    // <ul className = "menu-bar">
    //   <li><Menu MenuClassName='menu-link-start' To = 'how_to_use' /></li>
    //   <li><Menu /></li>
    //   <li><Menu /></li>
    // </ul>
  )
}

// python バージョン
// def MenuBar(props):
//   return(
//     <div className = "main-search-container">
//       <p className = "header">特徴と使い方</p>
//       <img className = "photo" src = "/media/image2.jpeg" />
//       <ul className = "menu-bar">
//         <li className = "menu-start"><a className = "menu-link" href = "/polls">特徴と使い方&nbsp;|&nbsp;</a></li>
//         <li className = "menu"><a className = "menu-link" href = "/polls">お気に入り&nbsp;|&nbsp;</a></li>
//         <li className = "menu"><a className = "menu-link" href = "/polls">会員登録/ログイン&emsp;</a></li>
//       </ul>
//     </div>
//   )

export default MenuBar;