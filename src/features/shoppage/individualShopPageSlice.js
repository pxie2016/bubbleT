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

export const fetchShopInfoById = createAsyncThunk(
    'shops/fetchShopInfoByIdStatus',
    async (id) => {
        const url = "http://localhost:8000/shops/get/" + id;
        const response = await axios.get(url);
        return response.data;
    }
)

const initialState = {id: "", name: "", address: "", city: "", state: "", zipcode: "",
    creator: "", imgFile: "", description: "", rating: "", createdAt: "", likeCount: 0, allReviews: []};

export const individualShopPageSlice = createSlice({
    name: 'individualshoppage',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShopInfoById.fulfilled, (state, action) => {
            state.name = action.payload.name;
            state.address = action.payload.address;
            state.city = action.payload.city;
            state.state = action.payload.state;
            state.zipcode = action.payload.zipcode;
            state.creator = action.payload.creator;
            state.createdAt = action.payload.createdAt;
            state.description = action.payload.description;
            state.likeCount = action.payload.likeCount;
            state.rating = action.payload.rating;
        });
    }
});

export const {
    setId
} = individualShopPageSlice.actions;

// Selectors
export const selectAllState = (state) => state.individualshoppage;
export const selectShopId = (state) => state.individualshoppage.id;
export const selectAllReviews = (state) => state.individualshoppage.allReviews;

export default individualShopPageSlice.reducer;
