import { useStorage } from '@/liveblocks.config'
import { memo } from 'react'


type LayerPreviewProps ={
    id  :string,
    onLayerPointerDown :(e: React.PointerEvent , layerId:string)=>void,
    selectionColor :string,
}



export const LayerPreview = memo(({id , onLayerPointerDown, selectionColor}:LayerPreviewProps) => {
 
   const layer = useStorage((root)=>root.layers.get(id))
     
   if(!layer)return;

   
   
   return (
    <div>
        
    </div>
  )
})

LayerPreview.displayName = "LayerPreview"
