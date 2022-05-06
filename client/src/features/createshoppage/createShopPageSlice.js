import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from '../../app/api'

export const createShop = createAsyncThunk(
    'shops/create',
    async ({shopData,navigate,toast}, {rejectWithValue}) => {
        
        try{
            const response = await api.createShop(shopData);
            toast.success("shop posted")
            navigate("/");
            return response.data;

        } catch(err){
            return rejectWithValue(err.response.data)
        }
    }
)

const createShopPageSlice = createSlice({
    name:'createshoppage',
    initialState:{
        shop:{},
    },
    extraReducers:(builder) => {
        builder.addCase(createShop.fulfilled, (state, action) => {
            state.shop = [action.payload]
        })
    }
});
export default createShopPageSlice.reducer