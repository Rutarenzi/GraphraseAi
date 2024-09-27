import React from "react";


const MySpan=({name,onclick})=>{
    return(
      <span onClick={()=>{onclick()}} className=
      "inline-flex items-center absolute bottom-6 bg-black text-white shadow hover:bg-primary/90  right-4 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 h-9 px-4 py-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" >
       {name}
      </span>
    )
}

export default MySpan;