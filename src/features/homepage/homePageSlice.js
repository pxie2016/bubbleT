import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import * as api from '../../app/api'
// The most recent way of doing this! r.t. https://redux-toolkit.js.org/usage/usage-guide#asynchronous-logic-and-data-fetching
export const fetchAllShops = createAsyncThunk(
    'homepage/fetchAllShopsStatus',
    async (thunkAPI) => {
        const url = "http://localhost:8000/shops/get";
        const response = await axios.get(url);
        return response.data;
    }
)

export const getShopsByUser = createAsyncThunk(
    'dashboard/getShopsByUser',
    async (userId, {rejectWithValue}) => {
        try{
            const response = await api.getShopsByUser(userId);
            return response.data;

        } catch(err){
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {userSignedIn: false, allShops: [], userShops:[]};

export const homePageSlice = createSlice({
    name: 'homepage',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        signIn: (state) => {
            state.userSignedIn = true;
        },
        signOut: (state) => {
            state.userSignedIn = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllShops.fulfilled, (state, action) => {
            state.allShops = action.payload;
        })
        builder.addCase(getShopsByUser.fulfilled, (state, action) => {
            state.userShops = action.payload;
        })
    },

});

export const {
    signIn, signOut
} = homePageSlice.actions;

// Selectors
export const selectSignInState = (state) => state.homepage.userSignedIn;
export const selectAllShops = (state) => state.homepage.allShops;

export default homePageSlice.reducer;
