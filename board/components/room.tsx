'use client'


import React, { ReactNode } from "react"
import { ClientSideSuspense  } from  "@liveblocks/react"

import {RoomProvider} from "@/liveblocks.config"
import { LiveList, LiveMap , LiveObject } from "@liveblocks/client"
import { Layer } from '@/types/canvas'

type RoomProps = {
    children :ReactNode,
    roomId: string,
    fallback :  NonNullable<React.ReactNode> | null
}

export const Room = ({children , roomId , fallback} :RoomProps ) => {
    
    return(
    <RoomProvider
     id={roomId}
     initialPresence={{cursor : null , selection:[]}}
     initialStorage={{
        layers : new LiveMap<string , LiveObject<Layer>>(),
        layerIds: new LiveList()
     }}
     >
           <ClientSideSuspense fallback ={fallback} >
              {()=>children}
           </ClientSideSuspense>
     </RoomProvider>
    )
}