import React, { useEffect, useState } from 'react';
import Header from '../components/home/header/Header';
import Recommendations from '../components/home/main/recommendations/Recommendations';
import Introduction from '../components/home/main/Introduction';
import Searcher from '../components/home/main/searcher/Searcher';
// import '../styles/index.css';
const Home = () => {
//   useEffect(() => {
//     console.log('useEffect!!');
//     try {
//       fetch("http://localhost:8000/polls/getSimData/")
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         // for key in data:
//           // 
//         // for(let key in data) { 
//         //   data[key] = JSON.parse(data[key]);
//         // } // ['param0', 'param1', ... , 'param17'];
//         console.log(data);
//       })
//     } catch (error) {
//       console.log("失敗しました");
//   };
//   console.log('OK');
// },[])


  return (
    <div>
      <Header />
      <Introduction />
      <Recommendations />
      <Searcher />
    </div>
  )
}

export default Home;