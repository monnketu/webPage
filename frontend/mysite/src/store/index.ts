import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userInfoSlice from '../slices/userInfoSlice';
import formSlice from '../slices/formSlice';
import { useSelector as rawUseSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import questionSlice from '../slices/questionSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
    formInfo: formSlice,
    questionInfo: questionSlice,
  }
});
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

