'use client'

import { useStorage } from '@/liveblocks.config'
import { LayerType } from '@/types/canvas'
import { memo } from 'react'


type LayerPreviewProps ={
    id  :string,
    onLayerPointerDown :(e: React.PointerEvent , layerId:string)=>void,
    selectionColor :string,
}



export const LayerPreview = memo(({id , onLayerPointerDown, selectionColor}:LayerPreviewProps) => {
 
   const layer = useStorage((root)=>root.layers.get(id))
     
   if(!layer)return;

   switch(layer.type)
   {
         case LayerType.Rectangle:
           return(
             <div>
              rectangle
             </div>
           )
          default:
            console.warn("unknown layer type");
            return null;
   }
}
)

LayerPreview.displayName = "LayerPreview"
