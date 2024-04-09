 'use client'

import { Info } from "./info"
import { Participants } from "./participants"

 

const Canvas = () => {
  return (
    <main className="h-full w-full  bg-neutral-100 relative touch-none">
        <Info/>
        <Participants/>
        </main>
  )
}

export default Canvas