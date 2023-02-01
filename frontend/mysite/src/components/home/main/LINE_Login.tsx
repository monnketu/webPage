import React, { useEffect,useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styles from './../../../styles/home/LINE_Login.module.scss';
const Login = () => {
  const [profImage, setProfImage] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [isGotToken, setIsGotToken ] = useState(false);
  const location = useLocation().search; // URL path や パラメータなど。JSのlocationと同じ
  const channel_id = 1657842449;
  const redirect_uri = 'http://localhost:3000/';
  const API_URL = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channel_id}&redirect_uri=${redirect_uri}&state=12345abcde&scope=profile%20openid&nonce=09876xyz`;
  const LINE_ICON_PATH = '/Line_Login_Button_Image/images/DeskTop/1x/20dp/btn_login_base.png';
  const query2 = location ? new URLSearchParams(location) : null;
  const accessCode = query2 ? query2.get('code') : null;
  useEffect(() => {
    if (accessCode && !isGotToken) {
      try {
        if (isFetched === false) {
          setIsGotToken(true);
          fetch(`http://localhost:8000/polls/line_api/${accessCode}/`,{
            method: 'POST',
            body: JSON.stringify({accessCode: accessCode})
          })
          .then(response => response.json())
          .then(res => {
            console.log(res.picture);
            setProfImage(res.picture)
          });
        }
      } catch(err) {
          console.log(err);
        }
      }
  },[]);
  return (
      <div>
        <a href={API_URL}>
          <img src={accessCode ? profImage : LINE_ICON_PATH} alt='LINEアイコン' className={accessCode ? styles.profIcon: undefined}/>
        </a>
      </div>
  )

}

export default Login;