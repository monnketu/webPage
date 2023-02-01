import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../counterSlice';
export type State = {
  reducer: {
    text: string,
    messageList: commentDataFromMySQL[],
    isFirstVisit: boolean,
  }
}
export interface commentDataFromMySQL {
  account_id: number;
  comment: string;
  id: number
}
export interface DataFromMySQL {
  commentList: {
    data: commentDataFromMySQL[];
  }
}

const store = configureStore({reducer: {
  reducer: counterReducer,
},});
export default store;