import { get } from "http";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const ITEMS_PER_PAGE = 4;

export const pokedexRouter = createTRPCRouter({
  getPokemons: publicProcedure
    .input(
      z.object({
        names: z.array(z.string()),
        page: z.number().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      const { names, page } = input;
      const capitalizedName = names.map(
        (name) => name.charAt(0).toUpperCase() + name.slice(1)
      );
      const pokemons = await ctx.db.pokemon.findMany({
        where: {
          name: {
            in: capitalizedName,
          },
        },
        select: {
          id: true,
          name: true,
          sprite: true,
          types: {
            select: {
              name: true,
            },
          },
        },
        skip: (page - 1) * ITEMS_PER_PAGE,
        take: ITEMS_PER_PAGE,
      });

      return pokemons ?? null;
    }),
  getPokemonLength: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ ctx, input }) => {
      const capitalizedName = input.map(
        (name) => name.charAt(0).toUpperCase() + name.slice(1)
      );
      const pokemons = await ctx.db.pokemon.findMany({
        where: {
          name: {
            in: capitalizedName,
          },
        },
      });
      return pokemons.length ?? null;
    }),
  getAllPokemonNames: publicProcedure.query(async ({ ctx }) => {
    const pokemons = await ctx.db.pokemon.findMany({
      select: {
        name: true,
      },
    });
    return pokemons ?? null;
  }),
  getAllTypes: publicProcedure.query(async ({ ctx }) => {
    const types = await ctx.db.pokemonType.findMany({
      where: {
        pokemons: {
          some: {},
        },
      },
      select: {
        name: true,
      },
    });
    return types ?? null;
  }),
  getPokemonsByType: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ ctx, input }) => {
      const capitalizedInput = input.map(
        (name) => name.charAt(0).toUpperCase() + name.slice(1)
      );
      const pokemons = await ctx.db.pokemon.findMany({
        where: {
          types: {
            some: {
              name: {
                in: capitalizedInput,
              },
            },
          },
        },
        select: {
          name: true,
        },
      });

      return pokemons.map((pokemon) => pokemon.name) ?? null;
    }),
});
