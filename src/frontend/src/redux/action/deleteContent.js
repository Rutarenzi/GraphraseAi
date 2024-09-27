import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContent } from "../../utils/endpoints";

export const DeleteContentThunk = createAsyncThunk("DeleteContent",
async(data,{rejectWithValue})=>{
    try{
        
       const repo = await deleteContent(data);
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