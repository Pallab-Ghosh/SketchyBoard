import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'


type ConfirmModalProps = {
    children: React.ReactNode
    onConfirm?: () => void;
    disabled? : boolean 
    header : string 
    description?: string
}


export const ConfirmModal = ({children , onConfirm , disabled , header , description}:ConfirmModalProps) => {
 
 const handleconfirm = ()=>{
    onConfirm?.();
 }
 
 
    return (
      <AlertDialog>
          <AlertDialogTrigger asChild>
             {children}
          </AlertDialogTrigger>

          <AlertDialogContent>
                <AlertDialogHeader>
                        <AlertDialogTitle>
                            {header}
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            {description}
                        </AlertDialogDescription>
                </AlertDialogHeader>
                       
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={disabled} onClick={handleconfirm}>Continue</AlertDialogAction>
                   
                </AlertDialogFooter>

          </AlertDialogContent>
      </AlertDialog>
  )
}

 