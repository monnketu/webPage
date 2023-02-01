import React from 'react'
import styles from '../../styles/Detail/header.module.scss';
import MainTitle from './titile/MainTitle';

interface Props {
  imageName?: string;
  info: {
    name: string;
  };
}
export default function Header(props: Props) {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerImage} src={`/img/${props.imageName ? props.imageName : 'shibuya'}.jpeg`} alt='詳細のヘッダー画像'/>
      <MainTitle name={props.info.name} />
    </div>
  )
}
