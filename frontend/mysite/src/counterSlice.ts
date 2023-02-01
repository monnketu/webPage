import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//   name: 'increment',
//   initialState: {
//     count: 10
//   },
//   reducers: {
//     additional:(state, action) => {
//       if (Number.isNaN(action.payload)) return ;
//       state.count += 1;
//     },
//     subtraction: (state, action) => {
//       if (Number.isNaN(action.payload)) return;
//       state.count -= action.payload;
//     }
//   }
// });

// export const {additional, subtraction} = counterSlice.actions;


export const counterSlice = createSlice({
  name: 'inputText',
  initialState: {
    text: '',
    messageList: [],
    isFirstVisit: true,
  },
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
    updateMessageList: (state, action) => {
      state.messageList = action.payload;
    },
    changeIsFirstVisit: (state, action) => {
      state.isFirstVisit = action.payload;
    }
  }
});

export const { changeText, updateMessageList, changeIsFirstVisit } = counterSlice.actions;
export default counterSlice.reducer;