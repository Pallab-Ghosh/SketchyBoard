import React from 'react'
import EmptySearch from './empty-search'
import EmptyFavorite from './empty-favorite'


type BoardListProps = {
    orgId : string,
    query :{
        search? : string
        favorites? : string 
    } 
}


const BoardList = ({orgId , query}:BoardListProps) => {


    const data=[];

    if(!data?.length && query.search)
    {
        return(
            <div>
                <EmptySearch/>
            </div>
        )
    }

    if(!data?.length && query.favorites)
    {
        return(
            <div>
                 <EmptyFavorite/>
            </div>
        )
    }

    if(!data.length)
    {
        return (
            <div>
                No Boards at all
            </div>
        )
    }





  return (
    <div>
        
    </div>
  )
}

export default BoardList