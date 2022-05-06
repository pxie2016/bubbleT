import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../../app/api";

export const fetchShopInfoById = createAsyncThunk(
    'shops/fetchShopInfoByIdStatus',
    async (id) => {
        const url = "http://localhost:8000/shops/get/" + id;
        const response = await axios.get(url);
        return response.data;
    }
)

export const createReviewBox = createAsyncThunk(
    'shops/createReviewBox',
    async ({reviewBoxData,shopId, toast}, {rejectWithValue}) => {
        try {
            console.log(reviewBoxData);
            const response = await api.createReviewBox(reviewBoxData,shopId);
            toast.success("review posted")
            return response.data;

        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    })


const initialState = {
    id: "", name: "", address: "", city: "", state: "", zipcode: "",
    creator: "",  description: "", rating: "", createdAt: "", allReviews: []
};

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
            state.rating = action.payload.rating;
            state.allReviews = action.payload.allReviews;
        });
        builder.addCase(createReviewBox.fulfilled, (state, action) => {
            state.allReviews = [...state.allReviews, action.meta.arg.reviewBoxData]
        })
    }
});

export const {
    setId
} = individualShopPageSlice.actions;

// Selectors
export const selectAllState = (state) => state.individualshoppage;
export const selectShopId = (state) => state.individualshoppage.id;

export default individualShopPageSlice.reducer;
