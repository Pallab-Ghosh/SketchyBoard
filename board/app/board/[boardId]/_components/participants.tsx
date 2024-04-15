'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { useOthers, useSelf } from "@/liveblocks.config"
import { UserAvatar } from "./user-avatar";
 
 

const maximum_shown_users = 1;

export const Participants = () => {

  let users = useOthers();
  const CurrentUser = useSelf()
  const hasMoreUsers = users.length > maximum_shown_users

 
 
 console.log('users',users)

  return (

    <div className=" absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md ">
          <div className=" flex gap-x-2">


          {
                CurrentUser && (
                    <UserAvatar
                      key={CurrentUser.connectionId}
                      src={CurrentUser?.info.picture}
                      name={CurrentUser?.info.name}
                      fallback={CurrentUser?.info.name?.[0] || "T"}
                      />
                )
              }


              {
                users.slice(0,maximum_shown_users).map((user_val)=>{
                  return (
                    <UserAvatar
                      key={user_val.connectionId}
                      src={user_val?.info.picture}
                      name={user_val?.info.name}
                      fallback={user_val?.info.name?.[0] || "T"}
                    />
                    
                  )
                })
              }

              {
                hasMoreUsers &&  (
                  <UserAvatar
                    name={`${users.length  - maximum_shown_users} more`}
                    fallback={ `+${users.length  - maximum_shown_users}`}
                    />
              )
              }


              
          </div>
    </div>
  )
}

 export const ParticipantsSkeleton = ()=>{

      return(
           
           <Skeleton className=" absolute h-12 top-2 right-2 bg-neutral-300 rounded-md p-3 flex items-center shadow-md w-[200px]"/>
      )
 }