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
        error:"",
        loading:false,
    },
    extraReducers:{
        [createShop.pending]:(state, action)=>{
            state.loading = true
        },
        [createShop.fulfilled]:(state, action)=>{
            state.loading = false
            state.shops = [action.payload]
        },
        [createShop.rejected]:(state, action)=>{
            state.loading = false
            state.error=action.payload.message
        },
    }
});
export default createShopPageSlice.reducer