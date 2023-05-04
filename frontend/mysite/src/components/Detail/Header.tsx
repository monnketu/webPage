import React from 'react'
import DBdata from '../../interfaces/DB/DBdata';
import styles from '../../styles/Detail/header.module.scss';
import MainTitle from './titile/MainTitle';
import MenuHeader from './../Header/Header';
interface Props {
  imageName?: string;
  info: DBdata
}
export default function Header(props: Props) {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerImage} src={`/img/coWorkingSpace_images/${props.info.imageName}`} alt='詳細のヘッダー画像' />
      <MainTitle name={props.info.name} />
      <MenuHeader />
    </div>
  )
}
