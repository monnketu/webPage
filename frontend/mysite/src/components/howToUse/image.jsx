import React from "react";
import headerImage from './../../img/image1.jpeg'
import '../../styles/HowToUse/image.css';
const Image = () => {
  return (
      <div>
        <img src={headerImage} alt='ヘッダーイメージ' className="header-image"/>
      </div>
  )
}

export default Image;