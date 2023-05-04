import React, {useState, useEffect} from 'react'
import DBdata from '../../../interfaces/DB/DBdata';
import reviewInterface from '../../../interfaces/DB/review';
import Review from './Review'

interface Props {
  spaceInfo: DBdata;
}
export default function Reviews(props:Props) {
  const [reviews, setReviews] = useState<Array<reviewInterface>>([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/coWorkingSpace/reviews/')
    .then(res => res.json())
    .then(response => setReviews(response.results))
  }, [])
  return (
    reviews.length >= 1 ?
      <div>
        {reviews.map((review, index) => {
          if (review.spaceName === props.spaceInfo.name) {
            return <Review memberID={review.memberID} reviewTitle={review.title} review={review.review} key={index}/>
          }
        })}
      </div>
      :null
  )
}
