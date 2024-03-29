'use client'

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs"
import SearchInput from "./search-input"
import OrganizationSidebar from './org-sidebar';
import InviteButton from "./invite-button";

const Navbar = () => {

  const {organization}=useOrganization()


  return (
    <div className="flex items-start gap-x-4 p-5">
            <div className=" hidden lg:flex lg:flex-1">
                 <SearchInput/>
            </div>

            <div className=" lg:hidden flex-1 ">
                        <OrganizationSwitcher
                            hidePersonal
                            appearance={
                            {
                              elements:{
                              rootBox:{
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center',
                              width:'100%',
                              maxWidth:'376px'
                            },
                            organizationSwitcherTrigger:{
                              padding:'6px',
                              width:'100%',
                              borderRadius:'50p%',
                              border:'1px solid #5e3ac9',
                              backgroundColor:'white'

                            }
                        }
                        }
                    }
                    />
            </div>
            {
              organization && (
                <InviteButton/>
              )
            }
          

            <div >
               <UserButton/>
            </div>
    </div>
  )
}

export default Navbar