import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FormInterface from "../interfaces/form";
// import formActionInterace from "../interfaces/formActionInterface";
const initialState:FormInterface = {
  space: '',
  dropIn: 'all',
  time: '',
  station: '',
  price: '',
};
interface reducerInterface {
  type: string;
  payload: string;
}
const formSlice = createSlice({
  name: 'formInfo',
  initialState,
  reducers: {
    spaceReducer: (state, action:reducerInterface) => {
      state.space = action.payload;
    },
    dropInReducer: (state, action:reducerInterface) => {
      state.dropIn = action.payload;
    },
    timeReducer: (state, action:reducerInterface) => {
      state.time = action.payload;
    },
    stationReducer: (state, action:reducerInterface) => {
      state.station = action.payload;
    },
    priceReducer: (state, action:reducerInterface) => {
      state.price = action.payload;
    },
  }
});

export const { spaceReducer, dropInReducer, timeReducer, stationReducer, priceReducer } = formSlice.actions;
export default formSlice.reducer;