import React from "react";
import { Button,buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import {login,logout } from "../../utils/auth"


const TopBar=()=>{
  const navigate= useNavigate();

   const goToLanding=()=>{
    navigate('/')
   }
   
    return(
      <div className="border-b border-gray-200 p-2">
      <div className="container mx-auto flex justify-between items-center">
     
        <div className="text-black text-xl font-bold" onClick={goToLanding}>
          GraphraseAi
        </div>
  
        <div>
          {window.auth.isAuthenticated?
          <Button
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          onClick={logout}
        >
          <span className="text-black">Logout</span>
        </Button>:
        <Button
        className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        onClick={login}
      >
        <span className="text-black">Login</span>
      </Button>  
        
        }
        
        </div>
      </div>
    </div>
    
    )
}


export default TopBar
