 

import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

import { useSelf } from "@/liveblocks.config"
 
type CanvasProps = {
  boardId : string
}


const Canvas = ({boardId}:CanvasProps) => {
 
 

  return (
    <main className="h-full w-full  bg-slate-200 relative touch-none">
        <Info boardId={boardId}  />
        <Participants/>
        <Toolbar/>
    </main>
  )
}

export default Canvas