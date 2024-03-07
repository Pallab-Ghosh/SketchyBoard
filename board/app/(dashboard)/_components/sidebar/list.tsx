'use client'

import { useOrganizationList } from "@clerk/nextjs"

 

const List = () => {

    const {userMemberships}=useOrganizationList({
        userMemberships:{
            infinite:true
        }
    })

    if(!userMemberships.data?.length)return null;



  return (
    <ul className=" space-y-4">
        {
            userMemberships.data?.map((member)=>(
               <p key={member.organization.id}>
                   {member.organization.name}
               </p>
            ))
        }
    </ul>
  )
}




export default List