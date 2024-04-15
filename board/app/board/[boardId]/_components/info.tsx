'use client'

import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { cn } from "@/lib/utils"
import { useRenameModal } from "@/store/use-rename-model"
 
import { useQuery } from "convex/react"
import Image from "next/image"
import Link from "next/link"


type InfoProps = {
  boardId : string
}

export const Info = ({boardId}:InfoProps) => {

  const data = useQuery(api.board.get , {
    id : boardId as Id <"boards">
  })

  const {onOpen} = useRenameModal()

  if(!data) 
    {
      return <InfoSkeleton/>
    }
    


  return (

    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
          <Hint label="Go to Boards Page" side="bottom" sideOffset={10}>
              <Button asChild className=" px-2" variant="board">
                      <Link href="/">
                            <Image src="/logo.svg" alt="Board Logo" height={40} width={40} />
                            <span className={cn("font-semibold text-xl ml-2 text-black")}>
                                Board
                            </span>
                      </Link>
                </Button> 
          </Hint>
          <Separator/>
           <Button  onClick={()=>onOpen(data._id , data.title)}  variant="board" className=" text-base font-normal" >
               {data.title}
            </Button>
    </div>
  )
}




export const InfoSkeleton =()=>{
   return (
    <Skeleton className=" w-[300px] absolute top-2 left-2 bg-neutral-300 rounded-md px-1.5 h-12 flex items-center shadow-md"/>
   )
}




 const Separator = ()=>{
  return (
    <div className=" text-neutral-300 px-1.5">

    </div>
  )
}