import {v} from 'convex/values'


import {mutation, query} from "./_generated/server"
import { DevBundlerService } from 'next/dist/server/lib/dev-bundler-service';

const images=[
  'placeholders/1.svg',
  'placeholders/2.svg',
  'placeholders/3.svg',
  'placeholders/4.svg',
  'placeholders/5.svg',
  'placeholders/6.svg',
  'placeholders/7.svg',
  'placeholders/8.svg',
  'placeholders/9.svg',
  'placeholders/10.svg',
]

export const create = mutation({
    args:{
        orgId:v.string(),
        title: v.string()
    },
   
   handler : async(ctx , args)=>{
      const identity = await ctx.auth.getUserIdentity();

    //  console.log('identity --> ' , identity)


      if(!identity)
      {
        throw new Error("Unauthorizes")
      }
      
      const randomImages=images[Math.floor( Math.random() * images.length)]

      const newboard = await ctx.db.insert("boards", {
        title : args.title,
        orgId : args.orgId,
        authorId : identity.subject,
        authorName : identity.name ? identity.name : "Unknown",
        imageUrl : randomImages
      })
      
       return newboard
   }
})

export const remove = mutation({
  args:{id : v.id("boards")},
  handler:async(ctx, args)=>{
    const identity = await ctx.auth.getUserIdentity();

 
      if(!identity)
      {
        throw new Error("Unauthorized")
      }

      //todo : later check to delete favorite relation as well 
      const userId = identity.subject
      
      const existingfavorite = await ctx.db.query("userFavorites")
      .withIndex("by_user_board" , (q)=>q.eq("userId" , userId) .eq("boardId",args.id) ) .unique()

      if(existingfavorite)
        {
          await ctx.db.delete(existingfavorite._id)
        }


       await ctx.db.delete(args.id)
  },


})


export const update = mutation({
  args:{id : v.id("boards") , title:v.string()},

  handler:async(ctx, args)=>{
    const identity = await ctx.auth.getUserIdentity();
    const title = args.title.trim();
 
      if(!identity)
      {
        throw new Error("Unauthorized")
      }

     if(!title)
     {
       throw new Error ("Title is required")
     }
 
     if(title.length > 10)
     {
      throw new Error("Title cannot be longer than 60 characters")
     }

     const board = await ctx.db.patch(args.id , {
      title : args.title
     })
     return board ;
  },

})

//create the method of adding favorite board

export const favorite = mutation ({
  args:{id : v.id("boards") , orgId:v.string()},
  
  handler:async(ctx, args)=>{

    const identity = await ctx.auth.getUserIdentity();

      if(!identity)
      {
        throw new Error("Unauthorized")
      }
   
      const board = await ctx.db.get(args.id)

       if(!board){
        throw new Error("Board not found")
       }

      const userId = identity.subject;

      const existingfavorite = await ctx.db.query("userFavorites")
      .withIndex("by_user_board" , (q)=>q.eq("userId" , userId) .eq("boardId",board._id)).unique()

      if(existingfavorite)
      {
        throw new Error("Board already favorited")
      }

      else

      {
            await ctx.db.insert("userFavorites" , {
                userId:userId,
                boardId:args.id, //board._id,
                orgId:args.orgId
              })

      }//else end
  },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
})



export const Unfavorite = mutation ({
  args:{id : v.id("boards")},
  
  handler:async(ctx, args)=>{

    const identity = await ctx.auth.getUserIdentity();

      if(!identity)
      {
        throw new Error("Unauthorized")
      }
   
      const board = await ctx.db.get(args.id)

       if(!board){
        throw new Error("Board not found")
       }

      const userId = identity.subject;

      const existingfavorite = await ctx.db.query("userFavorites")
      .withIndex("by_user_board" , (q)=>
        q.eq("userId" , userId).eq("boardId",board._id)  //check if orgID NEEDED
      )
      .unique()

      if(!existingfavorite)
      {
        throw new Error("Favorited board not found")
      }
      else
      {
        await ctx.db.delete(existingfavorite._id)
      }

    
  },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
})



export const get = query({
    args : {id: v.id("boards")},
    handler : async(ctx, args)  => {
      const board = ctx.db.get(args.id)
      return board;
    },
})