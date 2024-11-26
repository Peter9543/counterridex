import { createSlice } from "@reduxjs/toolkit";

const counterslice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count++

        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return {...state,count:0}
        },
        incrementbyamount:((state,action)=>{
            state.count+=action.payload
        })
    }
})
export const {increment,decrement,reset,incrementbyamount}=counterslice.actions
export default counterslice.reducer
