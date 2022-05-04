import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from '../features/homepage/homePageSlice'
import userReducer from '../features/authentication/userSlice.js';
import shopPageReducer from '../features/shoppage/shopPageSlice'
import createShopReducer from '../features/createshoppage/CreateShopSlice';
// Redux toolkit uses redux-thunk by default, so no additional setup is required for now

export const store = configureStore({
  reducer: {
    homepage: homePageReducer,
    user: userReducer,
    shoppage: shopPageReducer,
    shop:createShopReducer
  }
});
