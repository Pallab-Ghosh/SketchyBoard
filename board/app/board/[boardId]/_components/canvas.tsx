'use client'

import { useState } from "react"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

import { useCanRedo, useCanUndo, useHistory, useSelf } from "@/liveblocks.config"
import { CanvasMode, CanvasState } from "@/types/canvas"


 
 
type CanvasProps = {
  boardId : string
}


const Canvas = ({boardId}:CanvasProps) => {
 
 const [canvasState , setCanvasState]= useState<CanvasState>({mode:CanvasMode.None})

  const history = useHistory();
  const canUndo = useCanUndo();//boolean value whether it is active or not
  const canRedo = useCanRedo();//boolean value whether it is active or not



 
  return (
    <main className="h-full w-full  bg-slate-200 relative touch-none">
        <Info boardId={boardId}  />
        <Participants/>
        <Toolbar
         canvasState={canvasState}
         setCanvasState={setCanvasState}
         undo ={history.undo}//functions for undo
         redo = {history.redo}//functions for redo
         canRedo={canRedo}
         canUndo={canUndo}
         />
    </main>
  )
}

export default Canvas