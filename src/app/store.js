import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from '../features/homepage/homePageSlice'

// Redux toolkit uses redux-thunk by default, so no additional setup is required for now

export const store = configureStore({
  reducer: {
    homepage: homePageReducer
  }
});
