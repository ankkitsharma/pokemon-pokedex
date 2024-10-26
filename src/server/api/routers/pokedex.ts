import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokedexRouter = createTRPCRouter({
    getPokemon: publicProcedure.input(z.object({name: z.string()}))
        .query(async ({ctx, input}) => {
            const pokemon = await ctx.db.pokemon.findFirst({
                where: {
                    name: input.name
                }
            });

            return pokemon ?? null;
        })
});
