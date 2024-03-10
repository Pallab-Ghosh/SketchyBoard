'use client'

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"





const SearchInput = () => {


  return (
    <div className=" w-full relative">
       <Search
       className=" absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground"
       />
       <Input
        className=" w-full max-w-[510px] pl-9"
       />
    </div>
  )
}

export default SearchInput
