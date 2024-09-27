import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOneContent } from "../../utils/endpoints";


export const OneContentThunk = createAsyncThunk("OneContent",
async(data,{rejectWithValue})=>{
    try{
        
       const repo = await getOneContent(data);
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