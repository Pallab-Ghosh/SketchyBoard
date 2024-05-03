'use client'

import { LayerType, Side } from "@/types/canvas"
import { memo } from "react"
import { XYWH } from '../../../../types/canvas';
import { useSelf, useStorage } from "@/liveblocks.config";


type SelectionBoxProps ={
    onResizeHandlePointerDown:(corner:Side ,initialBounds:XYWH)=>void
}

const handle_width = 8

export const SelectionBox = memo(({onResizeHandlePointerDown}:SelectionBoxProps) => {
  
const soleLayerId = useSelf((me)=>me.presence.selection.length === 1 ? me.presence.selection[0] : null)


 const isShowingandles = useStorage((root)=>
 soleLayerId && root.layers.get(soleLayerId)?.type !==LayerType.Path
)




return (
   
    <div>

    </div>
  )
})

SelectionBox.displayName ="SelectionBox"