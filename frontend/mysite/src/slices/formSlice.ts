import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FormInterface from "../interfaces/form/form";
import { BusinessFormOption } from "../types/Option";
// import formActionInterace from "../interfaces/formActionInterface";
const initialState:FormInterface = {
  space: '',
  businessForm: 'all',
  time: '',
  station: '',
  price: '',
};
interface reducerInterface {
  type: string;
  payload: string;
}

interface businessFormReducerinterface {
  type: string;
  payload: BusinessFormOption;
}

const formSlice = createSlice({
  name: 'formInfo',
  initialState,
  reducers: {
    spaceReducer: (state, action:reducerInterface) => {
      state.space = action.payload;
    },
    dropInReducer: (state, action:businessFormReducerinterface) => {
      state.businessForm = action.payload;
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