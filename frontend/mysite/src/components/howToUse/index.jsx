import React from "react";
// import './../../styles/HowToUse/index.css'
const index = () => {
  return (
    <>
      <div className = "main-search-container">
        <p className = "header">特徴と使い方</p>
        <img className = "photo" src = "/media/image2.jpeg" />
     
        <ul className = "menu-bar">
          <li className = "menu-start"><a class = "menu-link" href = "/polls">特徴と使い方</a></li>
          <li className = "menu"><a class = "menu-link" href = "/polls">お気に入り</a></li>
          <li className = "menu"><a class = "menu-link" href = "/polls">会員登録/ログイン</a></li>
        </ul>
          <p className = "big-title">フリースタイルとは</p>
          <p className = "title">特徴</p>
          <p className = "sentence">関東エリアコワーキングスペースのまとめサイトです。<br></br>口コミや投稿機能を使って、ユーザー同士でおすすめの場所を共有することができます。<br></br>リモートワーク、リモート授業が増える中、家だとなかなか集中できない…
<br></br>移動中の空き時間にサクッと作業したい…<br></br>そんな悩みはありませんか？<br></br>フリースタイルを使えば、あなたにぴったりのコワーキングスペースを探せます。
          </p>
          <p className = "title">使い方</p>
          <p className = "subtitle">キーワードから探す</p>
          <p className = "sentence">今いる場所、駅名、気になっているワーキングスペースを入力してみましょう。</p>
          <p className = "subtitle">エリアから探す</p>
          <p className = "sentence">今いるエリアや会社に近いエリア、自宅から近いエリアなど、自分にとって働きやすい
エリアを選択してみましょう。</p>
          <p className = "subtitle">特徴から探す</p>
          <p className = "sentence">wi-fiや電源を使いたい<br></br>会議室を使いたい<br></br>プリンターやドリンクなど、オプションが充実している場所を使いたい<br></br>即日利用したい<br></br>そんな希望がある方は、自分が一番重視するワーキングスペースの特徴から検索してみ
ましょう。</p>
          <p className = "subtitle">おすすめから探す</p>
          <p className = "sentence">場所選びに失敗したくない<br></br>みんながおすすめしている場所で作業したい<br></br>そんな希望がある方は、みんなのおすすめのランキングを見てみましょう。</p>
          <p className = "header">さあ、使ってみましょう</p>
      </div>
      

    </>
  )
}

export default index;