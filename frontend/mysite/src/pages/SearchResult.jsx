import React from 'react';
import { useLocation } from "react-router-dom";



const SearchResult = () => {
  const location = useLocation();
  const { test } = location.state;
  return(
    <div>
      <div>これは検索結果のページです{test}</div>
    </div>

    
  )
}
export default SearchResult;