import { createSlice } from "@reduxjs/toolkit";
import { UpdateContentThunk } from "../action/editContent";

const initialState = {
    loadss: false,
    updateContent: null,
    error: null,
}

const UpdateContentSlice= createSlice({
    name: "updateContent",
    initialState,
    reducers: {

    },

    extraReducers: {
      [UpdateContentThunk.pending] : (state) =>{
        return{
            ...state,
            loadss: true
        }
      },
      [UpdateContentThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            loadss:false,
            error:payload
        }
      },
      [UpdateContentThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            loadss: false,
            updateContent: payload
        }
      }  
    }
})

export default UpdateContentSlice.reducer