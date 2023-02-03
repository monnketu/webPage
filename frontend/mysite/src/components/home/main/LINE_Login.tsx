import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styles from './../../../styles/home/LINE_Login.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import { loginReducer, logoutReducer } from "../../../slices/userInfoSlice";
import { getLineProfile } from "../../../slices/userInfoSlice";
import StateInterface from '../../../interfaces/State';
const Login = () => {
  const dispatch = useAppDispatch();
  const userInfo = useSelector((state:{userInfo:StateInterface}) => state.userInfo)
  console.log(userInfo)
  const location = useLocation().search; // URL path や パラメータなど。JSのlocationと同じ
  const channel_id = 1657842449;
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
        <a href={API_URL}>
          <img 
            src={ userInfo.isLogined ? userInfo.profileImage : LINE_ICON_PATH}
            alt='LINEアイコン' 
            className={userInfo.isLogined ? styles.profIcon: undefined}
          />
        </a>
      </div>
  )

}

export default Login;