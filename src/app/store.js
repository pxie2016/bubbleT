import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from '../features/homepage/homePageSlice'
import userReducer from '../features/user/userSlice.js';
// Redux toolkit uses redux-thunk by default, so no additional setup is required for now

export const store = configureStore({
  reducer: {
    homepage: homePageReducer,
    user:userReducer,
  }
});
