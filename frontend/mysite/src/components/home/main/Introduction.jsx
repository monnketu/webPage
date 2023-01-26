import React from 'react'
import styles from './../../../styles/home/main/introduction.module.scss';

export default function Introduction() {
  return (
    <div className = {styles.about_website}>
      <p className = {styles.about_website_headerline}>フリースタイルとは</p>
      <p className = {styles.about_website_sentence}>東京のコワーキングススペースのまとめサイトです。<br />キーワードを検索してあなたにぴったりのコワーキングスペースを見つけましょう。</p>
    </div>
  )
}
