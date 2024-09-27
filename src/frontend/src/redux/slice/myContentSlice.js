import { createSlice } from "@reduxjs/toolkit";
import { MyContentThunk } from "../action/MyContent";

const initialState = {
    loading: false,
     myContent: null,
    error: null,
}

const MyContentSlice= createSlice({
    name: "MyContent",
    initialState,
    reducers: {

    },

    extraReducers: {
      [MyContentThunk.pending] : (state) =>{
        return{
            ...state,
            loading: true
        }
      },
      [MyContentThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            loading: false,
            error:payload
        }
      },
      [MyContentThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            loading: false,
            myContent: payload
        }
      }  
    }
})

export default MyContentSlice.reducer