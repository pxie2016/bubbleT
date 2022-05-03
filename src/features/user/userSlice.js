import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from '../../app/api'

export const login = createAsyncThunk(
    'user/login',
    async ({formValue,navigate,toast}, {rejectWithValue}) => {
        
        try{
            const response = await api.logIn(formValue);
            navigate("/");
            return response.data;

        } catch(err){
            return rejectWithValue(err.response.data)
        }
    }
)
export const signup = createAsyncThunk(
    'user/signup',
    async ({formValue,navigate,toast}, {rejectWithValue}) => {
        
        try{
            const response = await api.signUp(formValue);
            navigate("/");
            return response.data;

        } catch(err){
            return rejectWithValue(err.response.data)
        }
    }
)
const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        error:"",
        loading:false,
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        },
        setLogout:(state,action)=>{
            localStorage.clear()
            state.user = null
        },
    },
    extraReducers:{
        [login.pending]:(state, action)=>{
            state.loading = true
        },
        [login.fulfilled]:(state, action)=>{
            state.loading = false
            localStorage.setItem("profile",JSON.stringify({...action.payload}))
            state.user = action.payload
        },
        [login.rejected]:(state, action)=>{
            state.loading = false
            state.error=action.payload.message
        },
        [signup.pending]:(state, action)=>{
            state.loading = true
        },
        [signup.fulfilled]:(state, action) => {
            state.loading = false
            localStorage.setItem("profile",JSON.stringify({...action.payload}))
            state.user = action.payload
        },
        [signup.rejected]:(state, action)=>{
            state.loading = false
            state.error=action.payload.message
        }
    }
});

export const{setUser, setLogout}=userSlice.actions;
export default userSlice.reducer;