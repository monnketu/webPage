import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/userInfoSlice';
import { useSelector as rawUseSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';


const store = configureStore({
  reducer: {
    userInfo: counterSlice
  }
});
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

