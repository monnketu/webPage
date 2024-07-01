export const addAnimation = () => {
  let targets = document.querySelectorAll('.big-title');
  let targets_title = document.querySelectorAll('.title');
  let targets_footer =  document.querySelectorAll('.footer');
  window.addEventListener('scroll', ()=> {
    const windowHeight = window.innerHeight; 
    let scroll = window.scrollY;
    // console.log(window.pageYOffset);
    Array.from(targets).forEach((target) => {
      const targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
      if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
        target.classList.add('is-animated-big-title'); //is-animatedクラスを加える
      }
    })
    Array.from(targets_title).forEach((title) => { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
      var targetPos_title = title.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
      if (scroll > targetPos_title - windowHeight) { //スクロール量 > ターゲット要素の位置
        title.classList.add('is-animated-title'); //is-animatedクラスを加える
      }
    })

    Array.from(targets_footer).forEach((footer) => { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
      let targetPos_footer = footer.getBoundingClientRect().top + scroll;
      if (scroll > targetPos_footer - windowHeight) {
        footer.classList.add('is-animated-footer');
      }
    });
  });
}