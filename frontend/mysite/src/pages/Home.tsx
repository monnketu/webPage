import React from 'react';
import Header from '../components/home/header/Header';
import Recommendations from '../components/home/main/recommendations/Recommendations';
import Introduction from '../components/home/main/Introduction';
import Searcher from '../components/home/main/searcher/Searcher';
// import '../styles/index.css';
const Home = () => {
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