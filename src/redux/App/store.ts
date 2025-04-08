import {configureStore } from '@reduxjs/toolkit'
import userFormReduser from '../features/FormSlice'
import UserDataReducer from '../features/UserDataSlice'
export const store = configureStore({
  reducer:{
    userForm:userFormReduser,
    userData:UserDataReducer,

  }
});

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;