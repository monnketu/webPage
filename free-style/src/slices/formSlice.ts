import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import formActionInterace from "../interfaces/formActionInterface";

type BusinessForm = "all" | "monthly" | "dropin_1day" | "dropin_1hour"; // 営業形態の選択肢

interface Form {
  space: string; // スペース名
  businessForm: BusinessForm; // 営業形態
  time: string; // 使用開始時刻
  station: string; // 最寄駅
  price: number;
  
}
const initialState:Form = {
  space: '',
  businessForm: 'all',
  time: '',
  station: '',
  price: 0,
};

interface reducerInterface {
  type: string;
  payload: number | string;
}

const formSlice = createSlice({
  name: 'formInfo',
  initialState,
  reducers: {
    spaceReducer: (state, action:PayloadAction<string>) => {
      state.space = action.payload;
    },
    dropInReducer: (state, action:PayloadAction<BusinessForm>) => {
      state.businessForm = action.payload;
    },
    timeReducer: (state, action:PayloadAction<string>) => {
      state.time = action.payload;
    },
    stationReducer: (state, action:PayloadAction<string>) => {
      state.station = action.payload;
    },
    priceReducer: (state, action:PayloadAction<number>) => {
      state.price = action.payload;
    },
  }
});

export const { spaceReducer, dropInReducer, timeReducer, stationReducer, priceReducer } = formSlice.actions;
export default formSlice.reducer;