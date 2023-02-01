import React, { useEffect, useState } from 'react';
import Header from '../components/home/header/Header';
import Recommendations from '../components/home/main/recommendations/Recommendations';
import Introduction from '../components/home/main/Introduction';
import Searcher from '../components/home/main/searcher/Searcher';
// import '../styles/index.css';
const Home = () => {
  let isFetched = false;
  useEffect(() => {
    console.log('useEffect!!');
    try {
      const url = 'https://api.line.me/oauth2/v2.1/token/';
      const headers = {
        accept:"application/json",
        "Content-Type" :"application/x-www-form-urlencoded"
      };
      const accessCode = 'cgjFFo8yGtVs5VTafSYV';
      const redirect_uri = 'http://localhost:3000/login';
      const channel_id = 1657842449;
      const channel_secret = '31acec1fd7315a32c27ab510ed80fabe';
      const code_verifier = 'wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1';
      const data = {
        'grant_type': 'authorization_code',
        'code': accessCode,
        'redirect_uri': redirect_uri,
        'client_id': channel_id,
        'client_secret': channel_secret,
        'code_verifier': code_verifier,
      };
      isFetched = true;
      if (!isFetched) {
        fetch("http://localhost:8000/polls/line_api/", {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          // for key in data:
          // 
          // for(let key in data) { 
            //   data[key] = JSON.parse(data[key]);
            // } // ['param0', 'param1', ... , 'param17'];
            // console.log(data);
          })
          console.log('OK');
        }
    } catch (error) {
        console.log("失敗しました");
      };
  },[]);
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