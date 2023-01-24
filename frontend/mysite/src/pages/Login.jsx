import React from "react";

const Login = () => {
  const URL = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657842449&redirect_uri=http://localhost:3000/login&state=12345abcde&scope=profile%20openid&nonce=09876xyz'
  const clickHandler = () => {
    // fetch(URL).then(() => console.log('access!!'))
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