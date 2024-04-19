'use client'

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
    //console.log('info' ,  info ,'cursors', cursor)

    if(!cursor)
        {
            return null;
        }
   

    const {x, y} = cursor
 

    return(
          <foreignObject
            style={{transform: `translate(${x}px) translate(${y}px)` }}
            height ={50}
            width ={50}
            className=" relative drop-shadow-md"
          >
             <MousePointer2 
              className="h-5 w-5"
              style={{fill:'beige' , color:'red'}}

             />
          </foreignObject>
    )
 })
 
 Cursor.displayName ="Cursor"