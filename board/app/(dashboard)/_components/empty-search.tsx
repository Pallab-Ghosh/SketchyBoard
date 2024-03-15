import Image from 'next/image'
import React from 'react'

const EmptySearch = () => {
  return (
    <div className=' h-full flex flex-col items-center justify-center'>
        <Image
          height={140}
          width={140}
          alt='empty'
          src={'/empty-search.svg'}
        />

        <h2 className=' text-2xl font-semibold mt-6'>
            No Results found
        </h2>

         <p className=' text-muted-foreground text-sm mt-2'>
            Tru searching for something else
         </p>
    </div>
  )
}

export default EmptySearch