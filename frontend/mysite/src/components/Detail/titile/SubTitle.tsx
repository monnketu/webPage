import React, { useEffect } from 'react'
import styles from './../../../styles/Detail/title/subTitle.module.scss';

interface Props {
  name: string;
}
export default function SubTitle(props: Props) {
  useEffect(() => {
    // let targets = document.querySelectorAll(styles.subTitle);
    let targets = document.querySelectorAll(`.${styles.subTitle}`);
    window.addEventListener('scroll', ()=> {
      const windowHeight = window.innerHeight; 
      let scroll = window.scrollY;
      // console.log(window.pageYOffset);
      for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
        var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
        if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
          target.classList.add(styles.is_animated_subTitle); //is-animatedクラスを加える
        }
      }
    });
  },[])
  return (
    <p className = {styles.subTitle}>{props.name}</p>
  )
}
