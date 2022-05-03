import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// The most recent way of doing this! r.t. https://redux-toolkit.js.org/usage/usage-guide#asynchronous-logic-and-data-fetching
export const fetchAllShops = createAsyncThunk(
    'homepage/fetchAllShopsStatus',
    async (thunkAPI) => {
        const url = "http://localhost:8000/shops";
        const response = await axios.get(url);
        return response.data;
    }
)

const initialState = {userSignedIn: false, allShops: []};

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
    }
});

export const {
    signIn, signOut
} = homePageSlice.actions;

// Selectors
export const selectSignInState = (state) => state.homepage.userSignedIn;
export const selectAllShops = (state) => state.homepage.allShops;

export default homePageSlice.reducer;
