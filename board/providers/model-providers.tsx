'use client'

import { RenameModal } from '@/components/modals/rename-modal'
import React, { useEffect, useState } from 'react'

const ModelProviders = () => {

   const [isMounted , setMounted] = useState(false)

   useEffect(()=>{
    setMounted(true)
  },[])


  
  return (
     <>
      {
        isMounted &&  <RenameModal/>
      }
     </>
  )
}

export default ModelProviders