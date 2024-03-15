import Image from 'next/image'
import React from 'react'

const EmptyFavorite = () => {
  return (
    <div className=' h-full flex flex-col items-center justify-center'>
        <Image
          height={140}
          width={140}
          alt='empty'
          src={'/empty-favorites.svg'}
        />

        <h2 className=' text-2xl font-semibold mt-6'>
            No Favorites Boards
        </h2>

         <p className=' text-muted-foreground text-sm mt-2'>
             Set a board as Favorite First
         </p>
    </div>
  )
}

export default EmptyFavorite