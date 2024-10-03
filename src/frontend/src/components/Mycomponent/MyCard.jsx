import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const MyCard=({name,counts})=>{
    return(
        <Card className="w-full">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>Number of {name}</CardDescription>
        </CardHeader>
        <CardContent>
         <span className="text-4xl font-bold">{counts.toString()}</span>
        </CardContent>
      </Card>
    )
}

export default MyCard;