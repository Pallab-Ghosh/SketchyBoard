import { Room } from "@/components/room"
import Canvas from "./_components/canvas"

type BoardpageProps = {
   params :{
    boardId : string
   }
}



const Boardpage = ({params}:BoardpageProps) => {

  return (

    <div className="h-full">
         <Room roomId={params.boardId}>
            <Canvas  boardId ={params.boardId} />
         </Room>
 
    </div>
  )
}

export default Boardpage