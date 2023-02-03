import React from 'react';
import ResultSpace from './ResultSpace';
import styles from './../../../styles/searchResult/results/results.module.scss'
import DBdata from '../../../interfaces/DBdata';
import {useSelector, TypedUseSelectorHook} from 'react-redux'
import { Store } from '../../../interfaces/Store';
interface Props {
  data: DBdata[] | undefined;
}

const Results = (props:Props) => {
  const info = useSelector((state:Store) => state.userInfo);
  console.log(info)
  return(
    <div className={styles.results}>
      {props.data ? props.data.map((data, index) => {
        return (
          <ResultSpace 
            name={data.name} 
            isDropIn={data.isDropIn} 
            price={data.price} 
            station={data.station} 
            startTime={data.startTime} 
            endTime={data.endTime}  
            wifi={data.wifi}
            imageName={data.imageName} 
            address={data.address} 
            url={'url'} 
            data={data} 
            key={index}
          />
        )
      }): null}
    </div>
  )
}

export default Results;