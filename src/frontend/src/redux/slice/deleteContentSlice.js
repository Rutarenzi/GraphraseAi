import { createSlice } from "@reduxjs/toolkit";
import { DeleteContentThunk } from "../action/deleteContent";

const initialState = {
    loader: false,
    deleteContent: null,
    errors: null,
}

const DeleteContentSlice= createSlice({
    name: "deleteContent",
    initialState,
    reducers: {

    },

    extraReducers: {
      [DeleteContentThunk.pending] : (state) =>{
        return{
            ...state,
            loader: true
        }
      },
      [DeleteContentThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            loader:false,
            errors:payload
        }
      },
      [DeleteContentThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            loader: false,
            deleteContent: payload
        }
      }  
    }
})

export default DeleteContentSlice.reducer