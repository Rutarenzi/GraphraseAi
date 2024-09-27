import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateContent } from "../../utils/endpoints";


export const UpdateContentThunk = createAsyncThunk("EditContent",
async(data,{rejectWithValue})=>{
    try{
        const { content, id } = data
       const repo = await updateContent(content,id);
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