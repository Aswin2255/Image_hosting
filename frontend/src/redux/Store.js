import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Slice";

export const store = configureStore({
     reducer:{
        user:Userslice
     } 
})



