import {auth , currentUser} from '@clerk/nextjs'
import {Liveblocks} from "@liveblocks/node"
import { ConvexClient, ConvexHttpClient} from "convex/browser"

import { api } from "@/convex/_generated/api"

const convex = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

const liveblocks = new Liveblocks({
    secret : "sk_dev_f3lAJ_W4idapvNUm-g022k882tmVQ3Ff5Ux-UDYNQeLcSexuFofw90i2_UTTY9Fh"

})

export async function POST(request : Request){

    const authorization = await auth();
    const user  = await  currentUser()

    console.log('AUTH INFO ', {
        authorization,
        user
    })

    if(!authorization || !user)
        {
            return new Response('Unauthorized' , {status : 403})
        }
    
        const { room } = await request.json();
        const board = await  convex.query(api.board.get , {id : room})

         console.log('room board user auth config ' , {
            room ,
            board,
            boardOrgId : board?.orgId,
            userOrgId : authorization.orgId
         })

        if(board?.orgId !== authorization.orgId)
            {
                return new Response ("Unauthorized" ,{ status : 403});
            }

        const userInfo = {
            name : user.firstName || "Anonymous",
            picture:  user.imageUrl
        }

        console.log("user info ",userInfo)

        const session = liveblocks.prepareSession(  user.id, {userInfo} )
        if(room)
            {
                session.allow(room , session.FULL_ACCESS);
            }
        const { status, body } = await session.authorize();
        console.log("ALLOWED" , {status , body})
        return new Response(body, { status });
}