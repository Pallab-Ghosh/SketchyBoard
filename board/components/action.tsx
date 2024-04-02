 'use client'
 
import { DropdownMenuContentProps} from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'

type ActionProps = {
   children :React.ReactNode,
   side?: DropdownMenuContentProps["side"]
   sideOffset?: DropdownMenuContentProps["sideOffset"]
   id:string,
   title:string
}


const Action = ({children , side , sideOffset , id , title}:ActionProps) => {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger>
             {children}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
               
          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default Action