import { createSlice } from "@reduxjs/toolkit";
import { MyContentStatsThunk } from "../action/MyContentStats";

const initialState = {
    loadinger: false,
    myContentStat: null,
    errorz: null,
}

const MyContentStatsSlice= createSlice({
    name: "MyContentStat",
    initialState,
    reducers: {

    },

    extraReducers: {
      [MyContentStatsThunk.pending] : (state) =>{
        return{
            ...state,
            loadinger: true
        }
      },
      [MyContentStatsThunk.rejected]:(state,{payload}) =>{
        return {
            ...state,
            loadinger: false,
            errorz:payload
        }
      },
      [MyContentStatsThunk.fulfilled]: (state,{payload}) => {
        return {
            ...state,
            loadinger: false,
            myContentStat: payload
        }
      }  
    }
})

export default MyContentStatsSlice.reducer