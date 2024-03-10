'use client'

import { Input } from "@/components/ui/input"
 
 
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import qs from 'query-string';
import { ChangeEvent, useEffect, useState } from "react"
import {useDebounceValue } from 'usehooks-ts'



const SearchInput = () => {

const router=useRouter()
const [value , setvalues]=useState("");
const [debounceValue , setvalue]= useDebounceValue (value,2000)


const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
    setvalues(e.target.value)
}


useEffect(()=>{
    const url=qs.stringifyUrl({
        url:'/',
        query :{
            search : debounceValue
        }
    } , {skipEmptyString : true , skipNull : true})

    router.push(url)
} , [debounceValue , router])



  return (
    <div className=" w-full relative">

       <Search
       className=" absolute top-1/2 left-3 transform -translate-y-1/2 
       text-muted-foreground h-4 w-4"
       />

       <Input
        className=" w-full max-w-[510px] pl-9"
        placeholder="Search Boards"
        onChange={handleChange}
        value={value}
        
       />
    </div>
  )
}

export default SearchInput
