import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateInterface, userInfoInterface } from "../interfaces/";
// import LINE_API_response from '../interfaces/login/LINE_API_response';

// 初期状態 ログアウトしたときもこの状態にする
const initialState: userInfoInterface = {
  userID: '',
  profileImage: '',
  isLogined: false,
}
// エラーハンドリング関数
// const handleErrors = (res: any) => {
//   if(res.ok) return res;  

//   switch(res.status) {
//     case 400: throw Error('INVALID_TOKEN');
//     case 401: throw Error('UNAUTHORIZED');
//     case 500: throw Error('INTERNAL_SERVER_ERROR');
//     case 502: throw Error('BAD_GATEWAY');
//     case 404: throw Error('NOT_FOUND');
//     default:  throw Error('UNHANDLED_ERROR');
//   }
// }
const getLineProfile = createAsyncThunk<LINE_API_response, string | null, {state: StateInterface;}>(
  "get_line_profile",
  (accessCode: string | null, thunkAPI) => {
  // const accessCode = thunkAPI.getState().accessCode;
  // const accessCode = thunkAPI.getState().userInfo.accessCode;
  return new Promise((resolve, reject) => {
    const state:StateInterface = thunkAPI.getState();
    if (accessCode && !state.userInfo.isLogined) {
      try {
        fetch(`http://localhost:8000/polls/line_api/${accessCode}/`,{
          method: 'POST',
          body: JSON.stringify({accessCode: accessCode})
        })
        .then(response => response.json())
        .then((res:LINE_API_response) => {
            thunkAPI.dispatch(loginReducer())
            resolve(res);
          })
        .catch(err => {
          reject(thunkAPI.rejectWithValue(err.message));
        });
        } catch(err:any) {
          reject(thunkAPI.rejectWithValue(err.message));
        }
      }
  })
})

  
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loginReducer: (state) => {
      state.isLogined = true;
    },
    logoutReducer: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLineProfile.pending, () => {
    });
    builder.addCase(getLineProfile.fulfilled, (state, action) => {
      state.userID = action.payload.sub; // payloadCreatorでreturnされた値
      state.profileImage = action.payload.picture
    });
    builder.addCase(getLineProfile.rejected, (state, action: PayloadAction<any>) => {
      state.userID = 'error!'; // payloadCreatorでreturnされた値
      // state.profileImage = action.payload.picture;
      state.profileImage = 'error!'
    });
  }
});
export const { loginReducer, logoutReducer } = userInfoSlice.actions;
// export { logoutReducer }
export { getLineProfile }
export default userInfoSlice.reducer;