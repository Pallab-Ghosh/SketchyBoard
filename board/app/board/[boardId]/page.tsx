import { Room } from "@/components/room"
import Canvas from "./_components/canvas"
import {CanvasLoading} from "./_components/canvas-loading"

type BoardpageProps = {
   params :{
    boardId : string
   }
}



const Boardpage = ({params}:BoardpageProps) => {

  return <CanvasLoading/>

  return (

    <div className="h-full">
         <Room roomId={params.boardId} fallback ={<CanvasLoading/>}>
            <Canvas  boardId ={params.boardId}   />
         </Room>
 
    </div>
  )
}

export default Boardpage