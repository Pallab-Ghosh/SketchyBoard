 'use client'

import { useOther } from "@/liveblocks.config"
import { memo } from "react"

 type CursorProps = {
    connectionId : number
 }

 export const Cursor = memo(({connectionId}:CursorProps)=>{
    
    const info = useOther(connectionId , (user)=> user?.info)
    const cursor = useOther(connectionId , (user) => user.presence.cursor )
    
    const name = info?.name || "Teammate"

    if(!cursor)
        return null;

    const {x, y} = cursor

    return(
        <p></p>
    )
 })
 
 Cursor.displayName ="Cursor"