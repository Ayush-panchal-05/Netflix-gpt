import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice" ;
 const userstore =configureStore({
    reducer: {userreducer} ,
 })
 export default userstore ;