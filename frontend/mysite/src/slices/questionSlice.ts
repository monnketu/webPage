import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Question from "../interfaces/state/question";
// import FormInterface from "../interfaces/form";
// import formActionInterace from "../interfaces/formActionInterface";
const initialState: Question = {
  diagnose: 'notStarted', 
  question1: 0,
  question2: 0,
  question3: 0,
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
const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    diagnoseStartReducer: (state) => {
      state.diagnose = 'progress';
    },
    diagnoseFinishReducer: (state) => {
      state.diagnose = 'finished';
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