import { createSlice } from "@reduxjs/toolkit";

const  userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state , action)=>{
            return state.payload ;
        },
        removeuser:(state,action)=>{
            return null ;
        }
    }
})

export const {addUser , removeuser}=userSlice.actions ;
export default userSlice.reducer ;