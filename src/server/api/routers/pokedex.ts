import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokedexRouter = createTRPCRouter({
    getPokemon: publicProcedure.input(z.object({name: z.string()}))
        .query(async ({ctx, input}) => {
            const capitalizedName = input.name.charAt(0).toUpperCase() + input.name.slice(1);
            const pokemon = await ctx.db.pokemon.findFirst({
                where: {
                    name: capitalizedName
                }
            });

            return pokemon ?? null;
        }),
    getPokemons: publicProcedure.input(z.array(z.string()))
        .query(async ({ctx, input}) => {
            const capitalizedName = input.map(name => name.charAt(0).toUpperCase() + name.slice(1));
            const pokemons = await ctx.db.pokemon.findMany({
                where: {
                    name: {
                        in: capitalizedName
                    }
                }
            });

            return pokemons ?? null;
        }),
    getAllPokemons: publicProcedure.query(async ({ctx}) => {
        const pokemons = await ctx.db.pokemon.findMany({
            select: {
                name: true,
            }
        });
        return pokemons ?? null;
    })
});
