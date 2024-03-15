import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EmptyBoard = () => {
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
                <Button size='lg'>
                   Create Boards
                </Button>
         </div>
    </div>
  )
}

export default EmptyBoard