import { RectangleLayer } from "@/types/canvas"
import React from "react"

type RetangleProps ={
    id:string,
    layer:RectangleLayer,
    onPointerDown :(e : React.PointerEvent , id:string)=>void
    selectionColor?:string
}



const Retangle = ({id ,layer, onPointerDown , selectionColor }:RetangleProps) => {
 
 const {x , y , width , height , fill} = layer;

 
 
    return (
    <rect
    className=" drop-shadow" 
    onPointerDown={(e)=>onPointerDown(e , id)}
    style={{
        transform : `translate( ${x}px , ${y}px)`
    }}
    x ={0}
    y={0}
    width={width}
    height={height}
    strokeWidth={1}
    fill="#000"
    stroke="transparent"
    />
  )
}

export default Retangle