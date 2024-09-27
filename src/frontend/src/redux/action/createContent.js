import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContent } from "../../utils/endpoints";


export const CreateContentThunk = createAsyncThunk("CreateContent",
async(data,{rejectWithValue})=>{
    try{
       
       const repo = await createContent(data);
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