import { useEffect } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  const userInfo = useSelector((state:StateInterface) => state.userInfo)
  // console.log(userInfo)
  const location = useLocation().search; // URL path や パラメータなど。JSのlocationと同じ
  const channel_id = 1657842449;
  // const redirect_uri = 'http://192.168.0.166:3000/';
  const redirect_uri = 'http://localhost:3000/';
  const API_URL = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channel_id}&redirect_uri=${redirect_uri}&state=12345abcde&scope=profile%20openid&nonce=09876xyz`;
  const LINE_ICON_PATH = '/Line_Login_Button_Image/images/DeskTop/1x/20dp/btn_login_base.png';
  const query2 = location ? new URLSearchParams(location) : null;
  const accessCode = query2 ? query2.get('code') : '';
  useEffect(() => {
    dispatch(getLineProfile(accessCode));
  },[dispatch]);
  return (
      <div>
        {
          userInfo.isLogined ? 
          <img 
            src={userInfo.profileImage}
            alt='LINEアイコン' 
            className={styles.profIcon}
          />:
        <a href={API_URL}>
          <img 
            src={LINE_ICON_PATH}
            alt='LINEアイコン'
          />
        </a> 
        }
      </div>
  )

}