'use client'

import { useStorage } from '@/liveblocks.config'
import { LayerType } from '@/types/canvas'
import { memo } from 'react'
import Retangle from './rectangle'


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
             <Retangle
              id={id}
              layer={layer}
              onPointerDown={onLayerPointerDown}
              selectionColor={selectionColor}
             />
           )
          default:
            console.warn("unknown layer type");
            return null;
   }
}
)

LayerPreview.displayName = "LayerPreview"
