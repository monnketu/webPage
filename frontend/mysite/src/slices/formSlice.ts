import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FormInterface from "../interfaces/form";
// import formActionInterace from "../interfaces/formActionInterface";
const initialState:FormInterface = {
  space: '',
  dropIn: 'all',
  time: ''
};
interface spaceInterface {
  type: string;
  payload: string;
}

interface dropinInterface {
  type: string;
  payload: string;
}
interface timeInterface {
  type: string;
  payload: string;
}
const formSlice = createSlice({
  name: 'formInfo',
  initialState,
  reducers: {
    spaceReducer: (state, action:spaceInterface) => {
      state.space = action.payload;
    },
    dropInReducer: (state, action:dropinInterface) => {
      state.dropIn = action.payload;
    },
    timeReducer: (state, action:timeInterface) => {
      state.time = action.payload;
      console.log(action);
    },
  }
});

export const { spaceReducer, dropInReducer, timeReducer } = formSlice.actions;
export default formSlice.reducer;