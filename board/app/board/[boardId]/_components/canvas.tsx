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
import {LayerPreview} from "./LayerPreview"





const MAX_LAYERS = 100;
 
 
type CanvasProps = {
  boardId : string
}


const Canvas = ({boardId}:CanvasProps) => {
 
   const layerIds = useStorage((root)=>root.layerIds)


  const [canvasState , setCanvasState]= useState<CanvasState>({mode:CanvasMode.None})
  const [camera , setCamera] = useState<Camera>({x:0 , y:0})
  const [lastUsedColor , setLastUsedColor] = useState<Color>({ r:0, g:0, b:0})

  const history = useHistory();
  const canUndo = useCanUndo();//boolean value whether it is active or not
  const canRedo = useCanRedo();//boolean value whether it is active or not


  

//onWheel method handler
 const onWheel = useCallback((e:React.WheelEvent)=>{
   setCamera((prev_camera_value)=>({
     x:prev_camera_value.x - e.deltaX,
     y:prev_camera_value.y - e.deltaY
   })
   )
 },[])


 //onPointerMove method handler
  const onPointerMove = useMutation(( {setMyPresence} , e:React.PointerEvent ) =>{
    e.preventDefault();
    const current = pointerEventToCanvasPoint(e, camera);
    setMyPresence({cursor:current})
  },[])


 //onPointerLeave method handler
  const onPointerLeave = useMutation(({setMyPresence} )=>{
   setMyPresence({cursor : null})
  },[])


  //insert new layer
  const insertLayer = useMutation(( {storage , setMyPresence} , layerType : LayerType.Ellipse | LayerType.Text | LayerType.Note | LayerType.Rectangle , position : Point ) =>
    {

    const liveLayers = storage.get("layers");
    const liveLayerIds = storage.get("layerIds");

    if(liveLayers.size >=MAX_LAYERS) return;

    const layerId = nanoid();

    const layer = new LiveObject({  type:layerType,  x:position.x,  y:position.y,  height:100,  width:100,  fill:lastUsedColor})

     liveLayerIds.push(layerId)//push new layerId
     liveLayers.set(layerId , layer) // push layerIds and with layer

    setMyPresence({selection : [layerId]} , {addToHistory : true})
    setCanvasState({mode : CanvasMode.None})
  },[lastUsedColor])




 const onPointerUp = useMutation(({}, e )=>{

  const point = pointerEventToCanvasPoint(e , camera);
  if(canvasState.mode === CanvasMode.Inserting)
      insertLayer(canvasState.layertype, point)
    
  else
      setCanvasState({mode:CanvasMode.None})
    
    
  history.resume()

 },[camera , canvasState , history , insertLayer])






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
          onPointerUp={onPointerUp}
         >
            <g
             style={{
                transform : `translate( ${camera.x}px , ${camera.y}px   )`
             }}
            >
              {
                layerIds.map((layerId)=>(
                   <LayerPreview
                    key ={layerId}
                    id={layerId}
                    onLayerPointerDown = {()=>{}}
                    selectionColor = "#000"
                   />
                ))
              }
              
                <CursorPresence/>
            </g>
         </svg>
    </main>
  )
}

export default Canvas