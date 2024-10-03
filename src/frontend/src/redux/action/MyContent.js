import { createAsyncThunk } from "@reduxjs/toolkit";
import { MyContent } from "../../utils/endpoints";
import { ToastError } from "@/utils/toast";


export const MyContentThunk = createAsyncThunk("getMyContent",
async(data,{rejectWithValue})=>{
    try{
        
       const repo = await MyContent();
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