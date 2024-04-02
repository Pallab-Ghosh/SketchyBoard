import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Overlay from './overlay'
import {formatDistanceToNow} from 'date-fns'
import { useAuth } from '@clerk/nextjs'
import Footer from './footer'
import { Skeleton } from "@/components/ui/skeleton"
import Action from '@/components/action'
import { MoreHorizontal } from 'lucide-react'


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
                          <MoreHorizontal
                          className='opacity-75 text-zinc-50 hover:opacity-100 transition-opacity'
                          />
                      </button>
                   </Action>

                </div> 

                <Footer
                  isFavorite ={isFavorite}
                  title = {title}
                  authorLabel = {authorLabel}
                  createdAtLabel = {createdAtLabel}
                  onClick = {()=>{}}
                  disabled = {false}
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

