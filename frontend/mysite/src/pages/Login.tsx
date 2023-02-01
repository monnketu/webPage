import React, { useEffect,useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isFetched, setIsFetched] = useState(false);
  const location = useLocation().search; // URL path や パラメータなど。JSのlocationと同じ
  const params = useParams();     // URLのパスパラメータを取得。例えば、 /uses/2 なら、2の部分を取得
  const [ isGotToken, setIsGotToken ] = useState(false);
  const redirect_uri = 'http://localhost:3000/login';
  const channel_id = 1657842449;
  const channel_secret = '31acec1fd7315a32c27ab510ed80fabe';
  const code_verifier = 'wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1';
  const LINE_ICON_PATH = '/Line_Login_Button_Image/images/DeskTop/2x/32dp/btn_base.png';
  const API_URL = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channel_id}&redirect_uri=${redirect_uri}&state=12345abcde&scope=profile%20openid&nonce=09876xyz`
  useEffect (() => {
    // const history = useNavigate();   // historyオブジェクトを取得。
    // console.log(params);
    const query2 = location ? new URLSearchParams(location) : null;
    const accessCode = query2 ? query2.get('code') : null;
    console.log(accessCode, isGotToken,`${accessCode}`, typeof accessCode);
    if (accessCode && !isGotToken) {
      const data = {
        grant_type: 'authorization_code',
        code: accessCode,
        redirect_uri: redirect_uri,
        client_id: channel_id,
        client_secret: channel_secret,
        code_verifier: code_verifier,
        // aria: 'tokyo',
        // name: 'name',
        // spaceID: 1,
      }
      try {
        // fetch('https://api.line.me/oauth2/v2.1/token/', {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },
        //   body: JSON.stringify(data)
        // })
        if (isFetched === false) {
          fetch(`http://localhost:8000/polls/line_api/${accessCode}/`,{
            method: 'POST',
            // headers: {
            //   "Content-Type": "application/x-www-form-urlencoded",
            // },
            // body: JSON.stringify(data)
            body: JSON.stringify({accessCode: accessCode})
          })
          .then(response => response.json())
          .then(res => {
            console.log(res); 
            setIsGotToken(true);
          });
        }
      } catch(err) {
          console.log(err);
        }
      }
      return () => {
        if (accessCode && !isGotToken) {
        setIsFetched(true);
      }
    }
  })
    
    return (
      <div>
        <a href={API_URL}>
          <img src={LINE_ICON_PATH} alt='LINEアイコン'/>
        </a>
      </div>
  )
}
export default Login;