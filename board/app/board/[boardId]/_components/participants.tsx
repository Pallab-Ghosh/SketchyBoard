 
import { Skeleton } from "@/components/ui/skeleton"


export const Participants = () => {
  return (
    <div className=" absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[200px]">
      List of users participants
    </div>
  )
}

 export const ParticipantsSkeleton = ()=>{

      return(
           
           <Skeleton className=" absolute h-12 top-2 right-2 bg-neutral-300 rounded-md p-3 flex items-center shadow-md w-[200px]"/>
      )
 }