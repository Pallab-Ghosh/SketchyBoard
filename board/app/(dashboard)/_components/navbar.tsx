'use client'

import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="flex items-start gap-x-4 p-5 bg-green-500">
            <div className=" hidden lg:flex lg:flex-1 bg-stone-500">
                todo
            </div>
            <div >
               <UserButton/>
            </div>
    </div>
  )
}

export default Navbar