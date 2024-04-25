import React from 'react'


type LayerPreviewProps ={

    id  :string,
    onLayerPointerDown :(e: React.PointerEvent , layerId:string)=>void,
    selectionColor :string,
}
const LayerPreview = ({id , onLayerPointerDown, selectionColor}:LayerPreviewProps) => {
 
 
    return (
    <div>
        
    </div>
  )
}

export default LayerPreview