import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Overlay from './overlay'
import {formatDistanceToNow} from 'date-fns'
import { useAuth } from '@clerk/nextjs'
 
import { Skeleton } from "@/components/ui/skeleton"
import Action from '@/components/action'
import { MoreHorizontal } from 'lucide-react'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { api } from '@/convex/_generated/api'
import { toast } from 'sonner'
import { Footer } from './footer'


type BoardCardProps={
    key : string 
    id  : string 
    title : string 
    imageUrl : string 
    authorID : string 
    authorName : string 
    createdAt :number
    orgId : string 
    isFavorite :boolean
}


const BoardCard = ({key,id , title, imageUrl, authorID , authorName , createdAt , orgId , isFavorite}:BoardCardProps) => {
 
     const {userId} = useAuth();
     const authorLabel = authorID == userId ? 'You' : authorName
     const createdAtLabel = formatDistanceToNow (createdAt , {
        addSuffix : true
     } )

     const {mutate :onFavorite , pending: pendingFavorite} = useApiMutation(api.board.favorite)
     const {mutate :onUnFavorite , pending: pendingUnFavorite} = useApiMutation(api.board.Unfavorite)


     const toggleFavorite = ()=>{
        if(isFavorite){
           onUnFavorite ({ id})
          
           .catch(()=>toast.error('Failed to add Unfavorite'))
        }
        else
        {
           onFavorite({id , orgId})
           .then((response)=>{
            console.log('response',response)
           })
           .catch(()=>toast.error('Failed to add favorite'))
        }
     }




    return (
       <Link href={`/board/${id}`}>
        <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
                <div className= 'relative flex-1  bg-amber-50'>
                       <Image
                            src={imageUrl}
                            alt='doodle'
                            fill
                            className=' object-fit hover:bg-stone-400'
                        />
 
                     
                   <Action id={id} title={title}  side="right">
                      <button className=' absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none'>
                          <MoreHorizontal className='opacity-75 text-cyan-600 hover:opacity-100 transition-opacity'/>
                      </button>
                   </Action> 

                </div> 

                <Footer
                  isFavorite ={isFavorite}
                  title = {title}
                  authorLabel = {authorLabel}
                  createdAtLabel = {createdAtLabel}
                  onClick = {toggleFavorite}
                  disabled = {pendingFavorite || pendingUnFavorite}
                />
        </div>
    </Link> 


  )
}

export default BoardCard

BoardCard.Skeleton_property =  function BoardCardSkeleton(){
  return (
    <div className='group aspect-[100/127]  rounded-lg overflow-hidden flex flex-col'>
       <Skeleton className=' h-full w-full'/>
    </div>
  )
}

