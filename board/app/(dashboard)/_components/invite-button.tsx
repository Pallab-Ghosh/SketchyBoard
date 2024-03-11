import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { OrganizationProfile } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'




const InviteButton = () => {

  return (
     <Dialog>
           <DialogTrigger asChild>
                <Button>
                   <Plus className=' h-4 w-4 mr-2'/>
                    Invite Members
                </Button>
           </DialogTrigger>
           
           <DialogContent className='p-0 border-none max-w-[880px]'>
             <OrganizationProfile/>
           </DialogContent>

     </Dialog>
  )
}

export default InviteButton