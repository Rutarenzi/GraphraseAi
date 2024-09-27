import { createAsyncThunk } from "@reduxjs/toolkit";
import { MyContent } from "../../utils/endpoints";


export const MyContentThunk = createAsyncThunk("getMyContent",
async(data,{rejectWithValue})=>{
    try{
        
       const repo = await MyContent();
       console.log(repo)
       if(repo.Ok){
        return repo.Ok

       }else if(repo.Err){
        return rejectWithValue(repo.Err)
       }

    }catch(error){
        return rejectWithValue(error.Err)
    }
}
);