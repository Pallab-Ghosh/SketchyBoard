import Image from 'next/image'
import React from 'react'

const EmptyOrg = () => {
  return (
        <div className='h-full flex flex-col items-center justify-center'>
              <Image
              alt='empty'
               src="/elements.svg"
               height={250}
               width={250}
              />

              <h2 className=' text-2xl font-semibold mt-6'>
                Welcome to Board
              </h2>

              <p className='text-muted-foreground text-sm mt-2'>
                Create an Organization to get started
              </p>
        </div>
  )
}

export default EmptyOrg