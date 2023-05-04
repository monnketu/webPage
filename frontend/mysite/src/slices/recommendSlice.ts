import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import DBdata from "../interfaces/DB/DBdata";
import recommendInterface from "../interfaces/recommend";
// import FormInterface from "../interfaces/form";
// import formActionInterace from "../interfaces/formActionInterface";
const initialState:recommendInterface = {
  rank1: undefined,
  rank2: undefined,
  rank3: undefined,

};
// interface spaceInterface {
//   type: string;
//   payload: string;
// }

// interface dropinInterface {
//   type: string;
//   payload: string;
// }
// interface timeInterface {
//   type: string;
//   payload: string;
// }
const recommendSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    recommendReducer: (state, action:{payload: Array<DBdata>; type:string}) => {
      state.rank1 = action.payload[0];
      state.rank2 = action.payload[1];
      state.rank3 = action.payload[2];
    },
  }
});

export const { recommendReducer } = recommendSlice.actions;
export default recommendSlice.reducer;