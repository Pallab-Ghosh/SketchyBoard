'use client'

import React, { useCallback, useState } from "react"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

import { useCanRedo, useCanUndo, useHistory, useSelf , useMutation, useStorage} from "@/liveblocks.config"
import { Camera, CanvasMode, CanvasState, Color, LayerType, Point } from "@/types/canvas"
import { CursorPresence } from "./cursor-presence"
import { pointerEventToCanvasPoint } from "@/lib/utils"

import {nanoid} from 'nanoid'
import { LiveObject } from "@liveblocks/client"





const MAX_LAYERS = 100;
 
 
type CanvasProps = {
  boardId : string
}


const Canvas = ({boardId}:CanvasProps) => {
 
   const layerIds = useStorage((root)=>root.layerIds)


  const [canvasState , setCanvasState]= useState<CanvasState>({mode:CanvasMode.None})
  const [camera , setCamera] = useState<Camera>({x:0 , y:0})
  const [lastUsedColor , setLastUsedColor] = useState<Color>({
    r:0,
    g:0,
    b:0
  })



  const history = useHistory();
  const canUndo = useCanUndo();//boolean value whether it is active or not
  const canRedo = useCanRedo();//boolean value whether it is active or not


  const insertLayer = useMutation(( {storage , setMyPresence} , layerType : LayerType.Ellipse | LayerType.Text | LayerType.Note | LayerType.Rectangle , position : Point ) =>{

    const liveLayers = storage.get("layers");
    if(liveLayers.size >=MAX_LAYERS)
      {
        return;
      }

    const liveLayerIds = storage.get("layerIds");
    const layerId = nanoid()

    const layer = new LiveObject({
      type:layerType,
      x:position.x,
      y:position.y,
      height:100,
      width:100,
      fill:lastUsedColor
    })

  liveLayerIds.push(layerId)
  liveLayers.set(layerId , layer)

  setMyPresence({selection : [layerId]} , {addToHistory : true})
 setCanvasState
  },[])



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
            <g
             style={{
                transform : `translate( ${camera.x}px , ${camera.y}px   )`
             }}
            >
                <CursorPresence/>
            </g>
         </svg>
    </main>
  )
}

export default Canvas