import React from 'react';
import image1 from '../img/image2.jpeg';


import shibuya from "../img/shibuya.jpeg";
import shinjuku from '../img/shinnjuku.jpeg';
import ikebukuro from "../img/shinnjuku.jpeg";
import tokyo     from "../img/tokyo.jpeg";
import shinagawa     from "../img/shinagawa.jpeg";
import others     from "../img/others.jpeg";
import wifi  from "../img/wifi.jpeg";
import money  from "../img/money.jpeg";
import meetingroom from "../img/meetingroom.jpeg";
import printer from "../img/printer.jpeg";
import dropin from "../img/dropin.jpeg";
import clock from "../img/clock.jpeg";
import first from "../img/1rd_image.jpeg";
import second from "../img/2rd_image.jpeg";
import third from "../img/3rd_image.jpeg";
import space from "../img/image1.jpeg";






import '../styles/index.css';
const Home = () => {
  return (
    <>
      <div className = "main-search-container">
        <div className = "header">
          <img className = "photo" src={image1} />
          <div className = "message-wrapper">
            <div className = "message">
              <p className = "key-message" >いつでも、どこでも</p>
            </div>
          </div>

          <div className = "menu-container">
            <span className = "title">もんけつ</span>
            <div>
              <ul className = "menu-bar">
                <li className = "menu-start"><a className = "menu-link" href = "/polls">特徴と使い方</a></li>
                <li className = "menu"><a className = "menu-link" href = "/polls">お気に入り</a></li>
                <li className = "menu"><a className = "menu-link" href = "/polls">会員登録/ログイン</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className= "search-box">
          <p className = "search-sentence" >場所、日時から探す</p>
          <input className = "search-criteria" type = "text" />
          <input className = "search-criteria" type = "text" />
          <input className = "search-date" type = "date" />
          <input className = "search-time" type = "time" />
          <button className ="search-button">検索</button>
        </div>
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
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={shibuya} />
                  <p className = "aria-name">渋谷</p>
                </a> 
              </li>
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={shinjuku} />
                  <p className = "aria-name">新宿</p>
                </a>  
              </li>
              
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={ikebukuro} />
                  <p className = "aria-name">池袋</p>
                </a> 
              </li>
            </ul>
        
            <ul className = "aria-info-list-2"> 
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={tokyo} />
                  <p className = "aria-name">東京</p>
                </a>
              </li>
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={shinagawa} />
                  <p className = "aria-name">品川</p>
                </a>  
              </li>
                
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={others}  />
                  <p className = "aria-name">その他</p>
                </a> 
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
                  <img className = "aria-image" src = {wifi} />
                  <p className = "aria-name">高速Wi-Fi</p>
                </a> 
              </li>
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={money}/>
                  <p className = "aria-name">低価格</p>
                </a>  
              </li>
              
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={meetingroom} />
                  <p className = "aria-name">広々会議室</p>
                </a> 
              </li>
            </ul>
        
            <ul className = "aria-info-list-2"> 
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={printer} />
                  <p className = "aria-longname">充実オプション</p>
                </a>
              </li>
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={dropin} />
                  <p className = "aria-longname">ドロップイン可能</p>
                </a>  
              </li>
                
              <li className='aria-info-item'>
                <a className = "aria-info" href = "/polls">
                  <img className = "aria-image" src={clock} />
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
                  <img className = "space-rank" src={first} />
                  <a className = "popular-space-info" href = "/polls">
                    <img className = "popular-space-image" src={space} />
                    <p className = "popular-space-name">space1</p>
                  </a> 
                </li>
                <li className='popular-space-info-item'>
                  <img className = "space-rank" src={second}/>
                  <a className = "popular-space-info" href = "/polls">
                    <img className = "popular-space-image" src={space} />
                    <p className = "popular-space-name">space2</p>
                  </a>  
                </li>
                
                <li className='popular-space-info-item'>
                  <img className = "space-rank" src={third} />
                  <a className = "popular-space-info" href = "/polls">
                    <img className = "popular-space-image" src={space} />
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