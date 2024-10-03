import React, { useEffect} from "react";
import Table from "@/components/Mycomponent/table";
import MyCard from "@/components/Mycomponent/MyCard";
import { useDispatch,useSelector } from "react-redux";
import { MyContentStatsThunk } from "@/redux/action/MyContentStats";
import { CircularProgress } from "@mui/material";

const DashboardPage=()=>{
     const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(MyContentStatsThunk());
    },[dispatch])
    const { loadinger, myContentStat,errorz } = useSelector((state)=>state.myContentStats)
    return(
       <div className="mx-auto max-w-[85%] mt-12">
        {loadinger?(<div style={{textAlign: "center"}}>
              <CircularProgress size={50} color="primary" />
          </div>):(!myContentStat ||errorz )?(
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
             <MyCard name="Notes" counts="0"/>
             <MyCard name="Paraphrase" counts="0"/>
             <MyCard name="Grammer check" counts="0"/>
             <MyCard name="Text simplify" counts="0"/>
        </div>
          ):(
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            <MyCard name="Notes" counts={myContentStat.totalNotes}/>
            <MyCard name="Paraphrase" counts={myContentStat.totalParapharase}/>
            <MyCard name="Grammer check" counts={myContentStat.totalGrammerCheck}/>
            <MyCard name="Text simplify" counts={myContentStat.totalTextSimply}/>
       </div>
          )
}
           <Table/>
       </div>
    )
}

export default DashboardPage