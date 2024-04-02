 'use client'
 
import { DropdownMenuContentProps, DropdownMenuItem} from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Link2 } from 'lucide-react'
import { toast } from 'sonner'

type ActionProps = {
   children :React.ReactNode,
   side?: DropdownMenuContentProps["side"]
   sideOffset?: DropdownMenuContentProps["sideOffset"]
   id:string,
   title:string
}


const Action = ({children , side , sideOffset , id , title}:ActionProps) => {
  
  const onCopyLink = ()=>{
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${id}`
    )
    .then(()=>{toast.success('Link copied') })
     .catch(()=>{toast.error('Failed to copy Link')})
  }
  
  
  return (
 
      <DropdownMenu>

          <DropdownMenuTrigger asChild>
             {children}
          </DropdownMenuTrigger>

          <DropdownMenuContent side={side} 
            sideOffset={sideOffset} 
             onClick={(e)=>e.stopPropagation()}
             className='w-60'
             
             >
              
                <DropdownMenuItem className=' p-3 cursor-pointer flex' onClick={onCopyLink}>
                     <Link2 className='h-4 w-4 mr-2'/>
                     Copy Board Link
                  </DropdownMenuItem>
                
          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default Action