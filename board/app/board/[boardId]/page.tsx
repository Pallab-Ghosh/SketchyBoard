import Canvas from "./_components/canvas"

type BoardpageProps = {
   params :{
    boardId : string
   }
}



const Boardpage = ({params}:BoardpageProps) => {
  return (
    <div className="h-full">
        <Canvas  boardId = {params.boardId} />
    </div>
  )
}

export default Boardpage