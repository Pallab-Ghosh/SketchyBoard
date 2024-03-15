'use client'

import React from 'react'
import EmptyOrg from './_components/empty-org'
import { useOrganization } from '@clerk/nextjs';
import { json } from 'stream/consumers';
import BoardList from './_components/board-list';


type DashboardPageProps={
  searchParams:{
    search? : string,
    favorites? : string
  }
}

 


const Dashboardpage = ({searchParams}:DashboardPageProps) => {

  const {organization}=useOrganization();


  return (
    <div className=' bg-slate-100 flex-1 h-[calc(100%-80px)] p-6'>
          {JSON.stringify(searchParams)}
      {
        !organization ?   <EmptyOrg/> :  <BoardList orgId={organization.id} query={searchParams} />
      }
    </div>
  )
}

export default Dashboardpage