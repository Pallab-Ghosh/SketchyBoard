



import { Camera, Color } from "@/types/canvas"
import { type ClassValue, clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"


const COLORS =[
  "#DC2626",
  "#D97706",
  "#059669",
  "#7C3AED",
  "#DB2777",
  '#4469c7',
  '#a2ad2a',
  '#f2bf30','#a16c37','#de602a','#851c4d'


]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ConnectionIdToColor(connectionId:number) : string {
  return COLORS[connectionId % COLORS.length]
}

export function pointerEventToCanvasPoint(e:React.PointerEvent , camera :Camera )
{
  //console.log("camera", Math.round(camera.x,), Math.round(camera.y))
    return {
      x: Math.round(e.clientX) - camera.x,
      y: Math.round(e.clientY) - camera.y
    }
}


export function ColorToCss(color : Color){

  return `#${color.r.toString(16).padStart(2,'0')}${color.g.toString(16).padStart(2,'0')}${color.b.toString(16).padStart(2,'0')}`

}