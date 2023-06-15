import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "../trpc";

export const newsRouter = createTRPCRouter({
    postNews: publicProcedure
        .input(
            z.object({ 
                title: z.string({required_error: "Title is required"}),  
                content: z.string({required_error: "Content is required"}),
                description: z.string().optional(),
                image: z.string().optional(),
                video: z.string().optional(),
                tags: z.string().optional(),
                category: z.string().optional()
            })
        )
        .mutation(async ({input: {title, content, description, image, video, tags, category}, ctx}) =>{
            try{
                await ctx.prisma.news.create({data: {title, content, description, image, video, tags, category}})
            }
            catch(err){
                console.log(err);  
            }
        }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.news.findMany();
  }),
});
