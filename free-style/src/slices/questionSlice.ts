import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// import FormInterface from "../interfaces/form";
// import formActionInterace from "../interfaces/formActionInterface";

interface Question {
  status: 'notStarted' | 'progress' | 'finished';
  question1: number;
  question2: number;
  question3: number;
}
const initialState: Question = {
  status: 'notStarted', 
  question1: 0,
  question2: 0,
  question3: 0,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    diagnoseStartReducer: (state) => {
      state.status = 'progress';
    },
    diagnoseFinishReducer: (state) => {
      state.status = 'finished';
    },
    question1Reducer: (state, action) => {
      state.question1 = action.payload
    },
    question2Reducer: (state, action) => {
      state.question2 = action.payload
    },
    question3Reducer: (state, action) => {
      state.question3 = action.payload
    }
  }
});

export const { diagnoseStartReducer, diagnoseFinishReducer,  question1Reducer, question2Reducer, question3Reducer} = questionSlice.actions;
export default questionSlice.reducer;