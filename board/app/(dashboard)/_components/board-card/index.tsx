import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Overlay from './overlay'


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
  return (
       <Link href={`/board/${id}`}>
        <div className='aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
                <div className= 'relative flex-1  bg-amber-50'>
                       <Image
                            src={imageUrl}
                            alt='doodle'
                            fill
                            className=' object-fill'
                        />
                   <Overlay/>  
                </div> 
                
        </div>
   
    </Link> 


  )
}

export default BoardCard