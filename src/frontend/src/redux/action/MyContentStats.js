import { createAsyncThunk } from "@reduxjs/toolkit";
import   { ContentStats } from "../../utils/endpoints"
import { ToastError } from "@/utils/toast";


export const MyContentStatsThunk = createAsyncThunk("MyContentStats",
async(data,{rejectWithValue})=>{
    try{
        
       const repo = await ContentStats();
       if(repo.Ok){
        return repo.Ok
       }else if(repo.Err){
        {repo.Err.Error && ToastError(repo.Err.Error)}
        return rejectWithValue(repo.Err)
       }

    }catch(error){
        return rejectWithValue(error.Err)
    }
}
);