import React from 'react'
import styles from '../../../styles/Detail/review/review.module.scss';

/**
 * @typedef {Object} Props
 * @property {number} memberID 会員ID
 * @property {string} reviewTitle
 * @property {string} review
 *
 * @param {Props} props
 * @return 口コミ1つ分のコンポーネント
 * 
*/

interface Props {
  memberID: number;
  reviewTitle: string;
  review: string;
}
export default function Review(props: Props) {
  return (
    <div className={styles.reviewWrapper}>
      <ul className={styles.reviewInfoList}>
        <li><h3>会員ID: {props.memberID}</h3></li>
        <li><h3>{props.reviewTitle}</h3></li> {/*口コミのタイトル*/}
        <li><p>{props.review}</p></li> {/*口コミの内容*/}
      </ul>
      <hr />
    </div>
  )
}
