import React from 'react'
import Review from './Review'


export default function Reviews() {
  return (
    <div>
      <Review memberID={1} reviewTitle='テストタイトル1' review='テスト口コミ1' />
      <Review memberID={2} reviewTitle='テストタイトル2' review='テスト口コミ2' />
      <Review memberID={3} reviewTitle='テストタイトル3' review='テスト口コミ3' />
    </div>
  )
}
