'use client'

import { UserButton } from "@clerk/nextjs"
import SearchInput from "./search-input"

const Navbar = () => {
  return (
    <div className="flex items-start gap-x-4 p-5">
            <div className=" hidden lg:flex lg:flex-1">
                 <SearchInput/>
            </div>

            <div >
               <UserButton/>
            </div>
    </div>
  )
}

export default Navbar