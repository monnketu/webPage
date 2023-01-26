import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../img/image2.jpeg';
import shibuya from "../img/shibuya.jpeg";
import shinjuku from '../img/shinnjuku.jpeg';
import ikebukuro from "../img/shinnjuku.jpeg";
import tokyo from "../img/tokyo.jpeg";
import shinagawa from "../img/shinagawa.jpeg";
import others from "../img/others.jpeg";
import wifi from "../img/wifi.jpeg";
import money from "../img/money.jpeg";
import meetingroom from "../img/meetingroom.jpeg";
import printer from "../img/printer.jpeg";
import dropin from "../img/dropin.jpeg";
import clock from "../img/clock.jpeg";
import first from "../img/1rd_image.jpeg";
import second from "../img/2rd_image.jpeg";
import third from "../img/3rd_image.jpeg";
import space from "../img/image1.jpeg";

import Form from './../components/home/Form/Form';
import '../styles/index.css';
const Home = () => {
  useEffect(() => {
    console.log('useEffect!!');
    try {
      fetch("http://localhost:8000/polls/getSimData/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // for key in data:
          // 
        // for(let key in data) { 
        //   data[key] = JSON.parse(data[key]);
        // } // ['param0', 'param1', ... , 'param17'];
        console.log(data);
      })
    } catch (error) {
      console.log("失敗しました");
  };
  console.log('OK');
},[])


  return (
    <>
      <div className = "main-search-container">
        <div className = "secondheader">
          <img className = "photo" src={image1} alt='header画像'/>
          <div className = "message-wrapper">
            <div className = "message">
              <p className = "key-message" >いつでも、どこでも</p>
            </div>
          </div>

          <div className = "menu-container">
            <span className = "title">もんけつ</span>
            <div>
              <ul className = "menu-bar">
                <li className = "menu-start"><Link className = "menu-link" href = "/polls">特徴と使い方</Link></li>
                <li className = "menu"><Link className = "menu-link" href = "/polls">お気に入り</Link></li>
                <li className = "menu"><Link className = "menu-link" href = "/polls">会員登録/ログイン</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <Form />
      </div>

      <div className = "about-website">
        <p className = "about-website-headline">フリースタイルとは</p>
        <p className = "about-website-sentence">東京のコワーキングススペースのまとめサイトです。<br />キーワードを検索してあなたにぴったりのコワーキングスペースを見つけましょう。</p>
      </div>
      <div className = "search-aria-container">
        <p className = "search-aria-sentence">エリアから探す</p>
        <div className = "popular-arias">
          <div className = "aria-info-wrapper">
            <ul className = "aria-info-list"> 
              <li className='aria-info-item'>
                <Link className = "aria-info" to = "/search_result" state={{aria: 'shibuya'}}>
                  <img className = "aria-image" src={shibuya} alt='渋谷の写真'/>
                  <p className = "aria-name">渋谷</p>
                </Link>
              </li>
              <li className='aria-info-item'>
                <Link className = "aria-info" to = "/search_result" state={{aria: 'shinjuku'}}>
                  <img className = "aria-image" src={shinjuku} alt='新宿の写真'/>
                  <p className = "aria-name">新宿</p>
                </Link>
              </li>
              
              <li className='aria-info-item'>
                <Link className = "aria-info" to = "/search_result" state={{aria: 'ikebukuro'}}>
                  <img className = "aria-image" src={ikebukuro} alt='池袋の写真'/>
                  <p className = "aria-name">池袋</p>
                </Link>
              </li>
            </ul>
        
            <ul className = "aria-info-list-2"> 
              <li className='aria-info-item'>
                <Link className = "aria-info" to = "/search_result" state={{aria: 'tokyo'}}>
                  <img className = "aria-image" src={tokyo} alt='東京'/>
                  <p className = "aria-name">東京</p>
                </Link>
              </li>
              <li className='aria-info-item'>
                <Link className = "aria-info" to = "/search_result" state={{aria: 'sinagawa'}}>
                  <img className = "aria-image" src={tokyo} alt='品川'/>
                  <p className = "aria-name">品川</p>
                </Link>
              </li>
                
              <li className='aria-info-item'>
                <Link className = "aria-info" to = "/search_result" state={{aria: 'sinagawa'}}>
                  <img className = "aria-image" src={others} alt='その他'/>
                  <p className = "aria-name">その他</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> 

      <div className = "search-aria-container">
        <p className = "search-aria-sentence">特徴から探す</p>
        <div className = "popular-arias">
          <div className = "aria-info-wrapper">
            <ul className = "aria-info-list"> 
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src = {wifi} alt='高速wi-fi'/>
                  <p className = "aria-name">高速Wi-Fi</p>
                </a> 
              </li>
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={money} alt='低価格'/>
                  <p className = "aria-name">低価格</p>
                </a>  
              </li>
              
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={meetingroom} alt='広々会議室'/>
                  <p className = "aria-name">広々会議室</p>
                </a> 
              </li>
            </ul>
        
            <ul className = "aria-info-list-2"> 
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={printer} alt='充実オプション'/>
                  <p className = "aria-longname">充実オプション</p>
                </a>
              </li>
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={dropin} alt='ドロップイン可能'/>
                  <p className = "aria-longname">ドロップイン可能</p>
                </a>  
              </li>
                
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={clock} alt='24時間制'/>
                  <p className = "aria-name">24時間制</p>
                </a> 
              </li>
            </ul>
          </div>
        </div>
        <div className = "search-popular-space-container">
          <p className = "search-popular-space-sentence">おすすめから探す</p>

          <div className = "popular-space">
            <div className = "popular-space-info-wrapper">
              <ul className = "popular-space-info-list"> 
                <li className='popular-space-info-item'>
                  <img className = "space-rank" src={first} alt='一位'/>
                  <a className = "popular-space-info" href = "/polls">
                    <img className = "popular-space-image" src={space} alt='space1'/>
                    <p className = "popular-space-name">space1</p>
                  </a> 
                </li>
                <li className='popular-space-info-item'>
                  <img className = "space-rank" src={second} alt='二位'/>
                  <a className = "popular-space-info" href = "/polls">
                    <img className = "popular-space-image" src={space} alt='space'/>
                    <p className = "popular-space-name">space2</p>
                  </a>  
                </li>
                
                <li className='popular-space-info-item'>
                  <img className = "space-rank" src={third} alt='三位'/>
                  <a className = "popular-space-info" href = "/polls">
                    <img className = "popular-space-image" src={space} alt='space'/>
                    <p className = "popular-space-name">space3</p>
                  </a> 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;