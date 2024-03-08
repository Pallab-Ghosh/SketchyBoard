import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
 


type HintProps={
    label:string,
    children:React.ReactNode,
    side?: 'top' | 'right' | 'bottom' | 'left' | undefined;
    align?: 'start' | 'center' | 'end' | undefined;
    sideOffset?: number ,
    alignOffset?:number

}

export const Hint = ({label, children , side , align , alignOffset , sideOffset}:HintProps)=>{

  return (
    <TooltipProvider>
        <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>

                <TooltipContent
                 className=" text-white bg-black border-black"
                 side={side}
                 sideOffset={sideOffset}
                 align={align}
                 alignOffset={alignOffset}
                 >
                    <p className=" font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
