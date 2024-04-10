import { Skeleton } from "@/components/ui/skeleton"




export const Info = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-64">
      TODO:  Info about the board 
    </div>
  )
}

export const InfoSkeleton = ()=>{
   return (
    <Skeleton className=" w-[300px] absolute top-2 left-2 bg-neutral-400 rounded-md px-1.5 h-12 flex items-center shadow-md"/>
   )
}