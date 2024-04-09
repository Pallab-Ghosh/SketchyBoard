 'use client'

import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

 

const Canvas = () => {
  return (
    <main className="h-full w-full  bg-neutral-100 relative touch-none">
        <Info/>
        <Participants/>
        <Toolbar/>
        </main>
  )
}

export default Canvas