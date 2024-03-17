import { useMutation } from "convex/react";
import { useState } from "react"


export const useApiMutation =(mutationFunction : any ) => {

    const [pending , setpending] = useState(false);
    const apiMutation = useMutation(mutationFunction)

     const mutate =(payload : any)=>{
        setpending(true);
         apiMutation(payload)
        .finally(()=>setpending(false))
        .then((result)=>{
            return result
        })
        .catch((error)=>{
            throw error
        })
     }

  return {mutate , pending}
}