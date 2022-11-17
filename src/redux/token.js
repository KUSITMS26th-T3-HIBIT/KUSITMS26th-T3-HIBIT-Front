import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "accessToken",
    initialState: {value: {token: null, isLogin: false}},
    reducers: {
        login: (state, action)=>{ 
            state.value = action.payload;
        }
    }
});
export const {login} = tokenSlice.actions;
export default tokenSlice.reducer;

