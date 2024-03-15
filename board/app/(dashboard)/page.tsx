'use client'

import React from 'react'
import EmptyOrg from './_components/empty-org'
import { useOrganization } from '@clerk/nextjs';

const Dashboardpage = () => {

  const {organization}=useOrganization();


  return (
    <div className=' bg-slate-100 flex-1 h-[calc(100%-80px)] p-6'>
      {
        !organization ?   <EmptyOrg/> : <p>Board List</p>
      }
    </div>
  )
}

export default Dashboardpage