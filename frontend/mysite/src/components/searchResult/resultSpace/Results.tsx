import React from 'react';
import ResultSpace from './ResultSpace';
import styles from './../../../styles/searchResult/results/results.module.scss'
import DBdata from '../../../interfaces/DB/DBdata';
// import {useSelector, TypedUseSelectorHook} from 'react-redux'
import { useSelector } from '../../../store';
import type { Store } from '../../../interfaces';

interface Props {
  data: DBdata[] | undefined;
}

const Results = (props:Props) => {
  // 【TODO】 以下2行は変数infoの検証用なので最後に消す
  const info = useSelector((state) => state.userInfo);
  console.log(info)

  return(
    <div className={styles.results}>
      {props.data ? props.data.map((data, index) => {
        return (
          <ResultSpace 
            name={data.name} 
            isDropIn={data.isDropIn} 
            price={data.price}
            dropInFeePerDay={data.dropInFeePerDay}
            dropInFeePerHour={data.dropInFeePerHour}
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