import React from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const location = useLocation().search; // URL path や パラメータなど。JSのlocationと同じ
  const params = useParams();     // URLのパスパラメータを取得。例えば、 /uses/2 なら、2の部分を取得
  // const history = useNavigate();   // historyオブジェクトを取得。
  const redirect_url = 'http://localhost:3000/login';
  const channel_id = 1657842449;
  const channel_secret = '31acec1fd7315a32c27ab510ed80fabe';
  const URL = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channel_id}&redirect_uri=${redirect_url}&state=12345abcde&scope=profile%20openid&nonce=09876xyz`
  const clickHandler = () => {
    // fetch(URL).then(() => console.log('access!!'))
  }
  console.log(params);
  const query2 = new URLSearchParams(location);
  const accessCode = query2.get('code');
  console.log(accessCode);
  if (accessCode) {
    const data = {
      grant_type: 'authorization_code',
      code: accessCode,
      redirect_uri: redirect_url,
      client_id: channel_id,
      client_secret: channel_secret,
      code_verifier: 'wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1'
    }

    try {
      fetch('https://api.line.me/oauth2/v2.1/token', {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: JSON.stringify(data)
      }).then(response => response.json())
      .then(res => console.log(res));
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <a href={URL}>
        <img src='/Line_Login_Button_Image/images/DeskTop/2x/32dp/btn_base.png' alt='LINEアイコン'/>
      </a>
    </div>
  )
}
export default Login;