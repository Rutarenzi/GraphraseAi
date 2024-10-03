import React from "react";
import { Box,CircularProgress  } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { Button } from "../ui/button";
import { AutoDelete, EditAttributesSharp } from "@mui/icons-material";
import { useDispatch,useSelector } from "react-redux";
import { DeleteContentThunk }from "../../redux/action/deleteContent"
import { MyContentThunk } from "@/redux/action/MyContent";


const Action=({data})=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const goToEdit=()=>{
      navigate(`/edit/${data.id}`)
    }
    
    const ContentDeletor=async()=>{
    await dispatch(DeleteContentThunk(data.id))
    dispatch(MyContentThunk());
    }

   const { loader } = useSelector((state)=>state.deleteContent)
    return(
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Button  onClick={goToEdit}>
       <EditAttributesSharp/>
     </Button>
     <Button  onClick={ContentDeletor} disabled={loader}>
       {loader?<CircularProgress size={25} color="white" />:<AutoDelete/>}
     </Button>
      </Box>
    )
}

export default Action