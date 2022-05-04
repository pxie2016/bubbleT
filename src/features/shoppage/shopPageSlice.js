import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllReviews = createAsyncThunk(
    'shopPage/fetchAllReviews',
    async () => {
        const url = "http://localhost:8000/ReviewBox";
        const response = await axios.get(url);
        return response.data;
    }
)

export const postReview = createAsyncThunk(
    'shopPage/postReview',
    async () => {
        const url = "http://localhost:8000/ReviewBox";
        const response = await axios.post(url);
        return response.data;
    }
)

const initialState = {allReviews: []};

export const shopPageSlice = createSlice({
    name: 'shoppage',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    extraReducers: (builder) => {
        builder.addCase(fetchAllReviews.fulfilled, (state, action) => {
            state.allReviews = action.payload;
        })
    }
});

// Selectors
export const selectAllReviews = (state) => state.shoppage.userSignedIn;

export default shopPageSlice.reducer;
