import React from "react";
import Image from "../image";
import headerImage from './../../img/image2.jpeg'
const Header = () => {
  return (
      <div>
        <img src={headerImage} className='header-image'/>
        <Image />
      </div>
  )
}

export default Header;