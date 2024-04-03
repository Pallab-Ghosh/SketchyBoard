'use client'
import { useRenameModal } from "@/store/use-rename-model"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";


export const RenameModal = () => {
  const {isOpen , initialValue , onClose , onOpen} = useRenameModal();
  const [title , set_title] = useState(initialValue.title)
  const {mutate , pending} = useApiMutation(api.board.update)
  console.log('title',title)
  console.log('initialValue.title',initialValue.title)
  

  useEffect(()=>{
    set_title(initialValue.title)
  },[initialValue.title])
  

const onSubmit : FormEventHandler<HTMLFormElement> =(e)=>{
 e.preventDefault();
  mutate({
     id:initialValue.id,
     title
  })
  .then(()=>{
    toast.success('Board renamed')
    onClose()
  })
  .catch(()=> toast.error('Failed to renamed board'))
}


  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
             <DialogContent>
                    <DialogHeader>
                          <DialogTitle>
                              Edit Board Title
                          </DialogTitle>
                    </DialogHeader>

                    <DialogDescription>
                         Enter a new title for this board
                    </DialogDescription>

                    <form onSubmit={onSubmit} className=" space-y-4">
                       <Input
                        disabled={false}
                        required maxLength={10}
                        value={title}
                        onChange={(e)=>set_title(e.target.value)}
                        placeholder="Board Title"
                        />
                        <DialogFooter>
                            <DialogClose asChild>
                               <Button type="button" variant="outline"> Cancel</Button>
                            </DialogClose>
                            <Button disabled={false} type="submit">
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
             </DialogContent>
      </Dialog>
  ) 
}