import React from 'react'


type BoardListProps = {
    orgId : string,
    query :{
        search? : string
        favorites? : string 
    } 
}


const BoardList = ({orgId , query}:BoardListProps) => {
  return (
    <div>
        {orgId}
        {JSON.stringify (query)}
    </div>
  )
}

export default BoardList