import React, { useState,useEffect} from "react";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "../ui/button";
import Action from "./Action";
import { useDispatch, useSelector } from "react-redux";
import { MyContentThunk } from "@/redux/action/MyContent";

const Table = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [value,setValue] = useState(0);
  const  [aiNote, setAiNote] = useState(" ");
  const [userNote, setUserNote] = useState("");
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(MyContentThunk());
  },[dispatch])

  const handleChange=(event, newValue)=>{
    setValue(newValue)
  }

  const handleClickOpen = (row,noteAi, myNote) => {
    setAiNote(noteAi);
    setUserNote(myNote);
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };
  const columns = [
    {field: "id", hearderName:"ID", width: 300},
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "Contet",
      headerName: "Content",
      renderCell: (params) => (
        <>
        <Button  onClick={() => handleClickOpen(params.row,params.row.AiNote, params.row.userNote)}>
          Content
        </Button>
       </>
      ),
      width: 150,

    },
    { field: "status", headerName: "Status", width: 150 },
    { field: "createdAt", headerName: "Created", width: 150 },
    { field: "updatedAt", headerName: "Updated", width: 150 },
    
    {
        field:"Action",
        headerName: "Action",
        renderCell: (params)=>(
         <Action data={params.row}/>
        ),
        width: 150,

    }
  ];
   const {  loading, myContent,error } = useSelector((state)=>state.mycontent)
  return (
    <Box
      sx={{
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          // Customize toolbar button styles
        },
      }}
    >
     
     {loading?
     (<div style={{textAlign: "center"}}>
      <CircularProgress size={50} color="primary" />
   </div>):  
   (myContent?.length  === 0|| error)?(
    <div style={{textAlign: "center"}}>
          <p>No content you have posted yet</p>
    </div>
  ):(<DataGrid
        getRowId={(row)=>(row.id)}
        rows={myContent}
        columns={columns} 
        slots={{
          toolbar: GridToolbar,
        }}
      />)}

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{textAlign: "center", fontWeight: "bold"}}> Content</DialogTitle>
        <DialogContent>
            <DialogContentText sx={{textAlign:"center", background:"black", borderRadius:"8px", color: "white"}}>Your Text</DialogContentText>
        <Box sx={{width: "80%", margin:"auto"}}>
           <p>{userNote}</p>  
        </Box>
        <DialogContentText sx={{textAlign:"center", background:"black", borderRadius:"8px", color: "white"}}>Response</DialogContentText>
        <Box sx={{width: "80%", margin:"auto"}}>
           <p>{aiNote}</p>
        </Box>
        <DialogActions>
  <Button onClick={handleClose} color="primary">
    Close
  </Button>
</DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Table;

