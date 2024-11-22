import {createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "../Thunk/adminLogin";


const adminLoginSlice = createSlice({
  name: "adminLogin",
  initialState: {
    isLoading: false,
    isAuth:false
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state)=>{
        state.isLoading = true;
    })
    builder.addCase(adminLogin.fulfilled,(state, action)=>{
        state.isLoading = false,
        state.isAuth = true
        localStorage.setItem("accessToken", action?.payload?.access);
        console.log("action.payload.access",action.payload.access);
        
    })
    builder.addCase(adminLogin.rejected,(state, action)=>{
        state.isLoading = false,
        state.isAuth = false
    })
  },
});

export default adminLoginSlice.reducer;
