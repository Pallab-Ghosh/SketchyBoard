import { useMutation } from "convex/react";
import { useState } from "react"


export const useApiMutation =(mutationFunction : any ) => {

    const [pending , setpending] = useState(false);
    const apiMutation = useMutation(mutationFunction)

     const mutate =async (payload : any)=>{

        try{
            setpending(true);
            const val =await apiMutation(payload)
            return val;
        }
        catch(error){
            throw error
        }
        finally{
            setpending(false)
        }

        
       
     
     }

  return {mutate , pending}
}