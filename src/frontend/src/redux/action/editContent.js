import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateContent } from "../../utils/endpoints";
import { ToastError, ToastSuccess } from "@/utils/toast";


export const UpdateContentThunk = createAsyncThunk("EditContent",
async(data,{rejectWithValue})=>{
    try{
        const { content, id } = data
       const repo = await updateContent(content,id);
       if(repo.Ok){
        ToastSuccess(repo.Ok)
        return repo.Ok
       }else if(repo.Err){
        {repo.Err.NotFound && ToastError(repo.Err.NotFound)}
        {repo.Err.Error && ToastError(repo.Err.Error)}
        {repo.Err.NotAllowed && ToastError(repo.Err.NotAllowed)}
        return rejectWithValue(repo.Err)
       }

    }catch(error){
        return rejectWithValue(error.Err)
    }
}
);