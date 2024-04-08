
import {v} from 'convex/values'
import {query} from './_generated/server'
import {getAllOrThrow} from 'convex-helpers/server/relationships'
import { truncate } from 'fs';


export const get = query({
    args :{ orgId :  v.string() ,search : v.optional(v.string()) , favorites : v.optional(v.string() ) }
    ,
    handler : async(ctx, args)=>{
        const identity = await ctx.auth .getUserIdentity();

        if(!identity)
        {
            throw new Error('Unauthorized');
        }

        if(args.favorites)
            {
        const favoritedBoards = await ctx.db.query("userFavorites").withIndex("by_user_org" , (q) => q.eq("userId" , identity.subject).eq("orgId", args.orgId))
                 .order("desc")
                 .collect()

            const ids = favoritedBoards.map((board_value) => board_value.boardId);
            const boards = await getAllOrThrow(ctx.db , ids);

            return boards.map((board)=>(
                {
                    ...board,
                    isFavorite : true
                }
            ))
            }


    
        // Search the boards based on title 
        const title = args.search as string;
        let boards =[];

        if(title)
            {
                boards = await ctx.db.query("boards").withSearchIndex("search_title" , (q)=> q.search("title" , title).eq("orgId", args.orgId))
                .collect()
            }

         else
         {
            boards = await ctx.db.query("boards").withIndex("by_org" , (q) =>q.eq("orgId",args.orgId)) .order("desc")
            .collect()
         }


       
 const boardWithFavoriteRelation = boards.map(async(board_value)=>{

    return ctx.db.query("userFavorites").withIndex("by_user_board_org" ,(q)=>q.eq("userId",identity.subject).eq("boardId",board_value._id).eq("orgId",args.orgId))
      .unique()

                    .then((response) =>{
                      
                        return {...board_value , isFavorite : !!response}
                    })
            })

            const Resolved_Board_With_Favorite_Boolean = Promise.all(boardWithFavoriteRelation)
            return Resolved_Board_With_Favorite_Boolean; 
    
    }
})