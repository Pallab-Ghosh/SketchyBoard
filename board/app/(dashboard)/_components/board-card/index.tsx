import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Overlay from './overlay'
import {formatDistanceToNow} from 'date-fns'
import { useAuth } from '@clerk/nextjs'
import Footer from './footer'
import { Skeleton } from "@/components/ui/skeleton"


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
                            className=' object-fit'
                        />
                   <Overlay/>  
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

