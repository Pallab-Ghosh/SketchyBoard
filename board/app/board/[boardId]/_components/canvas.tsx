'use client'

import React, { useCallback, useState } from "react"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

import { useCanRedo, useCanUndo, useHistory, useSelf , useMutation} from "@/liveblocks.config"
import { Camera, CanvasMode, CanvasState } from "@/types/canvas"
import { CursorPresence } from "./cursor-presence"
import { pointerEventToCanvasPoint } from "@/lib/utils"


 
 
type CanvasProps = {
  boardId : string
}


const Canvas = ({boardId}:CanvasProps) => {
 
  const [canvasState , setCanvasState]= useState<CanvasState>({mode:CanvasMode.None})
  const [camera , setCamera] = useState<Camera>({x:0 , y:0})


  const history = useHistory();
  const canUndo = useCanUndo();//boolean value whether it is active or not
  const canRedo = useCanRedo();//boolean value whether it is active or not
 
 const onWheel = useCallback((e:React.WheelEvent)=>{
   setCamera((prev_camera_value)=>({
     x:prev_camera_value.x - e.deltaX,
     y:prev_camera_value.y - e.deltaY
   })
   )
 },[])


  const onPointerMove = useMutation(( {setMyPresence} , e:React.PointerEvent ) =>{

    e.preventDefault();
    const current = pointerEventToCanvasPoint(e, camera);
    setMyPresence({cursor:current})
  },[])


  const onPointerLeave = useMutation(({setMyPresence} )=>{
   setMyPresence({cursor : null})
  },[])


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
         
         <svg className="h-[100vh] w-[100vw]"
          onWheel={onWheel}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
         >
            <g>
                <CursorPresence/>
            </g>
         </svg>
    </main>
  )
}

export default Canvas