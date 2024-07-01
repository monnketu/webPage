import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpaceData } from "@/common/data/interfaces";
// import FormInterface from "../interfaces/form";
// import formActionInterace from "../interfaces/formActionInterface";

interface Recommend {
  rank1: SpaceData | undefined;
  rank2: SpaceData | undefined;
  rank3: SpaceData | undefined;
}

const initialState:Recommend = {
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
    recommendReducer: (state, action:PayloadAction<Array<SpaceData>>) => {
      state.rank1 = action.payload[0];
      state.rank2 = action.payload[1];
      state.rank3 = action.payload[2];
    },
  }
});

export const { recommendReducer } = recommendSlice.actions;
export default recommendSlice.reducer;