"use client";
import { api } from "~/trpc/react";
import PokemonRow from "./PokemonRow";
import { Box, Container, Stack } from "@mui/material";

export default function PokemonTable({
  pokemonNames,
}: {
  pokemonNames: string[];
}) {
  const { data: pokemons, isPending } =
    api.pokedex.getPokemons.useQuery(pokemonNames);
  // console.log("Bulbasaur and Ivysaur ", pokemons);
  return (
    <Stack direction={"row"} flexWrap={"wrap"}>
      {isPending
        ? "Loading..."
        : pokemons!.map((pokemon) => {
            return (
              <PokemonRow
                key={pokemon.id}
                name={pokemon.name}
                sprite={pokemon.sprite}
                types={pokemon.types}
              />
            );
          })}
    </Stack>
  );
}
