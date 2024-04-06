
import {v} from 'convex/values'
import {query} from './_generated/server'

export const get = query({
    args :{ orgId :  v.string() }
    ,
    handler : async(ctx, args)=>{
        const identity = await ctx.auth .getUserIdentity();

        if(!identity)
        {
            throw new Error('Unauthorized');
        }

        const boards = await ctx.db.query("boards")
        .withIndex("by_org" , (q) =>q.eq("orgId",args.orgId))
        .order("desc")
        .collect()

            const boardWithFavoriteRelation = boards.map(async(board_value)=>{

                return ctx.db.query("userFavorites").withIndex("by_user_board_org" ,(q)=>q.eq("userId",identity.subject).eq("boardId",board_value._id).eq("orgId",args.orgId))
                    .unique()
                    .then((response) =>{
                        //console.log("response from favorite", response)
                        return {...board_value , isFavorite : !!response}
                    })
            })

            const Resolved_Board_With_Favorite_Boolean = Promise.all(boardWithFavoriteRelation)
            return Resolved_Board_With_Favorite_Boolean; 
    
    }
})