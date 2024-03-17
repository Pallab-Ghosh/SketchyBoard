'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import React from 'react'


const EmptyBoard = () => {

  const create = useMutation(api.board.create)
  const {organization}= useOrganization()

  const onClick = ()=>{
 
      if(!organization)return;

     create({
        orgId:organization.id,
        title : "Untitled"
     })
  }

  return (
    <div className=' h-full flex flex-col items-center justify-center'>
        <Image
          height={140}
          width={140}
          alt='empty'
          src={'/note.svg'}
        />

        <h2 className=' text-2xl font-semibold mt-6'>
           Create your First Board
        </h2>

         <p className=' text-muted-foreground text-sm mt-2'>
             Start by creating a Board for your organization 
         </p>

         <div className=' mt-6'>
                <Button onClick={onClick} size='lg'>
                   Create Boards
                </Button>
         </div>
    </div>
  )
}

export default EmptyBoard