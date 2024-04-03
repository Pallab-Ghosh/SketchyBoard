 'use client'
 
import { DropdownMenuContentProps, DropdownMenuItem} from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Link2, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { api } from '@/convex/_generated/api'
import { ConfirmModal } from './confirm-modal'
import { Button } from './ui/button'
import { useRenameModal } from '@/store/use-rename-model'

type ActionProps = {
   children :React.ReactNode,
   side?: DropdownMenuContentProps["side"]
   sideOffset?: DropdownMenuContentProps["sideOffset"]
   id:string,
   title:string
}


const Action = ({children , side , sideOffset , id , title}:ActionProps) => {
  
   const {mutate , pending} = useApiMutation(api.board.remove)
   const {onOpen , isOpen}= useRenameModal()
 

  const onCopyLink = ()=>{
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${id}`
    )
    .then(()=>{toast.success('Link copied') })
     .catch(()=>{toast.error('Failed to copy Link')})
  }
  

  const onDelete = ()=>{
     mutate({id})
     .then(()=>toast.success("Board Deleted"))
     .catch(()=>toast.error("Failed to delete Board"))
  }
  
  return (
 
      <DropdownMenu>

          <DropdownMenuTrigger asChild>
             {children}
          </DropdownMenuTrigger>

          <DropdownMenuContent side={side} sideOffset={sideOffset}  onClick={(e)=>e.stopPropagation()} className='w-60'>
                <DropdownMenuItem className=' p-3 cursor-pointer flex' onClick={onCopyLink}>
                        <Link2 className='h-4 w-4 mr-2'/>
                        Copy Board Link
                      </DropdownMenuItem>

                      <DropdownMenuItem className=' p-3 cursor-pointer flex'  onClick={()=>onOpen(id , title)} >
                        <Pencil className='h-4 w-4 mr-2'/>
                         Rename
                      </DropdownMenuItem>

                       <ConfirmModal
                          header='Delete Board ?' 
                          description='This will delete the board and all of its contents'
                          disabled={pending}
                          onConfirm={onDelete}
                         >

                              <Button variant="ghost" className=' p-3 cursor-pointer flex text-sm w-full justify-start font-normal'>
                                    <Trash2 className='h-4 w-4 mr-2'/>
                                     Delete
                            </ Button>
                      </ConfirmModal>
                
          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default Action