import { createSlice } from "@reduxjs/toolkit";
import { OneContentThunk } from "../action/getOneContent";

const initialState = {
    load: false,
    OneContent: null,
    error: null,
}

const OneContentSlice= createSlice({
    name: "OneContent",
    initialState,
    reducers: {

    },

    extraReducers: {
      [OneContentThunk.pending] : (state) =>{
        return{
            ...state,
            load: true
        }
      },
      [OneContentThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            load:false,
            error:payload
        }
      },
      [OneContentThunk.fulfilled]: (state,{payload}) => {
        console.log(payload)
        return {
            ...state,
            load: false,
            OneContent: payload
        }
      }  
    }
})

export default OneContentSlice.reducer