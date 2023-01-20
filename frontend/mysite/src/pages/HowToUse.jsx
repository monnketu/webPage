import React, { useEffect } from 'react';
import Header from '../components/howToUse/header';
import Title from '../components/howToUse/title';
import Index from './../components/howToUse/index';

const HowToUse = () => {
  useEffect(() => {
    let targets = document.querySelectorAll('.big-title');
    let targets_title = document.querySelectorAll('.title');
    let targets_footer =  document.querySelectorAll('.footer');
    window.addEventListener('scroll', ()=> {
      const windowHeight = window.innerHeight; 
      let scroll = window.scrollY;
      // console.log(window.pageYOffset);
      for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
        var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
        if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
          target.classList.add('is-animated-big-title'); //is-animatedクラスを加える
        }
      }
      for (let target_title of targets_title) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
        var targetPos_title = target_title.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
        if (scroll > targetPos_title - windowHeight) { //スクロール量 > ターゲット要素の位置
          target_title.classList.add('is-animated-title'); //is-animatedクラスを加える
        }
      }
      for (let target_footer of targets_footer) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
        let targetPos_footer = target_footer.getBoundingClientRect().top + scroll;
        if (scroll > targetPos_footer - windowHeight) {
          target_footer.classList.add('is-animated-footer');
        }
      }
    });
  },[])
  return (
    <div>
      {/* <Title title={'特徴と使い方'}/>
      <Title title={'フリースタイルとは'}/>
      <Title title={'さあ、使ってみましょう'}/> */}
      {/* <Header /> */}
      <Index />
    </div>
  )
}

export default HowToUse