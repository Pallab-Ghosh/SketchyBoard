'use client'

import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

import React from 'react'
import EmptySearch from './empty-search'
import EmptyFavorite from './empty-favorite'
import EmptyBoard from './empty-boards'
import BoardCard from './board-card'
import NewBoardButton from './new-board-button'
import Loading from './loading'


type BoardListProps = {
    orgId : string,
    query :{
        search? : string
        favorites? : string 
    } 
}


const BoardList = ({orgId , query}:BoardListProps) => {


    const data=useQuery(api.boards.get , {orgId , ...query});

    if(data == undefined){
    return (
           <div>
                       
                <h2 className=' text-2xl'>
                    {
                        query.favorites ? 'Favorite Boards' : 'Team Boards'
                    }
                </h2>

                       
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>   
                        <NewBoardButton orgId={orgId} disabled />  
                         <BoardCard.Skeleton_property/>
                         <BoardCard.Skeleton_property/>
                         <BoardCard.Skeleton_property/>
                         <BoardCard.Skeleton_property/>
                         <BoardCard.Skeleton_property/>
        
                </div>
           </div>
        )
     }


    if(!data?.length && query.search)
    {
        return <EmptySearch/>
    }

    if(!data?.length && query.favorites)
    {
        return <EmptyFavorite/>
    }

   if(!data.length)
    {
        return <EmptyBoard/>
    }


  return (
    <div>
        <h2 className=' text-2xl'>
           {
            query.favorites ? 'Favorite Boards' : 'Team Boards'
           }
        </h2>
        
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10'>
             
             <NewBoardButton orgId={orgId} />

             {
                data.map((board)=>(
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title = {board.title}
                        imageUrl= { board.imageUrl}
                        authorID={board.authorId}
                        authorName ={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite}
                    />
                ))
             }
          </div>
    </div>
  )
}

export default BoardList