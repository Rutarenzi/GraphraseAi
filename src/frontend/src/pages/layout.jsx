import { Outlet } from "react-router";
import TopBar from "@/components/Mycomponent/topBar";


const Layout=() => {
    return(
    <>
     <TopBar/>
     <Outlet/>
    </>
    
    )
}

export default Layout