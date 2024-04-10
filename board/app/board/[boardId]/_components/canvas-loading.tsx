import { Loader } from 'lucide-react'
import React from 'react'
import { InfoSkeleton } from './info'
 




export const CanvasLoading = () => {


  return (
    <main className="h-full w-full  bg-neutral-100 relative touch-none flex items-center justify-center">
        <Loader className='h-6 w-6 text-muted-foreground animate-spin' /> 
         <InfoSkeleton/>
    </main>
  )
}

 