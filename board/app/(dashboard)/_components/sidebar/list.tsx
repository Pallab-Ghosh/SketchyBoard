'use client'

import { useOrganizationList } from "@clerk/nextjs"
import Items from "./items"

 

const List = () => {

    const {userMemberships}=useOrganizationList({
        userMemberships:{
            infinite:true
        }
    })

    console.log(userMemberships)

    if(!userMemberships.data?.length)return null;



  return (
    <ul className=" space-y-4">
        {
            userMemberships.data?.map((member)=>(
                <Items
                  key={member.organization.id}
                  id={member.organization.id}
                  name={member.organization.name}
                  imageUrl={member.organization.imageUrl}
                />
              
            ))
        }
    </ul>
  )
}




export default List