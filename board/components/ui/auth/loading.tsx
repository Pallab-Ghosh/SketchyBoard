import { Loader } from "lucide-react"
import Image from "next/image"

 

const Loading = () => {
  return (
    <div className=" h-full w-full flex justify-center items-center ">
           <Loader
            width={120}
            height={120}
            className=" animate-spin duration-200"
           
           />
    </div>
  )
}

export default Loading