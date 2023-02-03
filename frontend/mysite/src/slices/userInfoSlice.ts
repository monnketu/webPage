import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import StateInterface from "../interfaces/State";
import LINE_API_response from '../interfaces/LINE_API_response';
// 初期状態 ログアウトしたときもこの状態にする
const initialState: StateInterface = {
  userID: '',
  profileImage: '',
  isLogined: false,
}
const getLineProfile = createAsyncThunk<LINE_API_response, string|null>(
  "get_line_profile",
  (accessCode:string|null, thunkAPI) => {
  // const accessCode = thunkAPI.getState().accessCode;
  // const accessCode = thunkAPI.getState().userInfo.accessCode;
  return new Promise((resolve, reject) => {
    if (accessCode) {
      try {
        console.log(thunkAPI.getState())
        fetch(`http://localhost:8000/polls/line_api/${accessCode}/`,{
          method: 'POST',
          body: JSON.stringify({accessCode: accessCode})
        })
          .then(response => response.json())
          .then((res:LINE_API_response) => {
            console.log(res);
            thunkAPI.dispatch(loginReducer())
            resolve(res);
          })
          .catch(err => {
            reject(thunkAPI.rejectWithValue(err.message));
          });
        } catch(err:any) {
          console.log('asdasd',err);
          reject(thunkAPI.rejectWithValue(err.message));
        }
      }
  })
})

  
  export const counterSlice = createSlice({
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
    builder.addCase(getLineProfile.pending, (state) => {
    });
    builder.addCase(getLineProfile.fulfilled, (state, action) => {
      console.log(action)
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
export const { loginReducer, logoutReducer } = counterSlice.actions;
// export { logoutReducer }
export { getLineProfile }
export default counterSlice.reducer;