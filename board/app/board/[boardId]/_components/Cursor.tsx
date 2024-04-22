'use client'

import { ConnectionIdToColor } from "@/lib/utils"
import { useOther } from "@/liveblocks.config"
import { MousePointer2 } from "lucide-react"
import { memo, useEffect } from "react"

 type CursorProps = {
    connectionId : number
 }

 export const Cursor = memo(({connectionId}:CursorProps)=>{

    //console.log('Cursor called')
 

    const info = useOther(connectionId , (user)=> user?.info)
    const cursor = useOther(connectionId , (user) => user.presence.cursor )
    
    const name = info?.name || "Teammate"
   

    if(!cursor)
        {
            return null;
        }
   

    const {x, y} = cursor
 
  
    return(
          <foreignObject
            style={{transform: `translateX(${x}px) translateY(${y}px)` }}
            height ={50}
            width ={50}
            className=" relative drop-shadow-md"
          >
             <MousePointer2 
              className="h-5 w-5"
              style={{
               fill: ConnectionIdToColor(connectionId) ,
               color: ConnectionIdToColor(connectionId)
            }}

             />
          </foreignObject>
    )
 })
 
 Cursor.displayName ="Cursor"