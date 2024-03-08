'use client'

import { Hint } from "@/components/hint"
import { cn } from "@/lib/utils"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import Image from "next/image"

type ItemsProps={
  id:string,
  name:string,
  imageUrl:string
}




const Items = ({id,name,imageUrl}:ItemsProps) => {
  
  const {organization}=useOrganization();
  const {setActive}=useOrganizationList();
 
  const isActive=organization?.id === id;


  const onClick=()=>{

     if(!setActive)
       return;

     setActive({organization : id});
  }
  
  return (
    <div className=" aspect-square relative">
        <Hint  label={name} side='right' align='start' sideOffset={18} >
            <Image
                fill
                alt={name}
                src={imageUrl}
                onClick={onClick}
                className={cn(
                  "rounded-md cursor-pointer opacity-55 hover:opacity-100 transition",
                  isActive  &&  'opacity-100'
                )}
              />
        </Hint>
    </div>
  )
}

export default Items