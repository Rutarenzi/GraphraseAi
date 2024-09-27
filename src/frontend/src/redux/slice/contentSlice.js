import { createSlice } from "@reduxjs/toolkit";
import { CreateContentThunk } from "../action/createContent";

const initialState = {
    load: false,
    contents: null,
    error: null,
}

const CreateContentSlice= createSlice({
    name: "contents",
    initialState,
    reducers: {

    },

    extraReducers: {
      [CreateContentThunk.pending] : (state) =>{
        return{
            ...state,
            load: true
        }
      },
      [CreateContentThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            load:false,
            error:payload
        }
      },
      [CreateContentThunk.fulfilled]: (state,{payload}) => {
        console.log(payload)
        return {
            ...state,
            load: false,
            contents: payload
        }
      }  
    }
})

export default CreateContentSlice.reducer