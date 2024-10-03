import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContent } from "../../utils/endpoints";
import { ToastError, ToastSuccess } from "@/utils/toast";

export const CreateContentThunk = createAsyncThunk("CreateContent",
async(data,{rejectWithValue})=>{
    try{
       const repo = await createContent(data);
       if(repo.Ok){
        ToastSuccess("Create successfully")
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