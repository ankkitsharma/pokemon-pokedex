"use client";
import { api } from "~/trpc/react";
import PokemonRow from "./PokemonRow";
import { Box, Container, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";
import { log } from "console";

export default function PokemonTable({
  pokemonNames,
}: {
  pokemonNames: string[];
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { data: pokemons, isPending } = api.pokedex.getPokemons.useQuery({
    names: pokemonNames,
    page: currentPage,
  });
  const { data: totalPages } =
    api.pokedex.getPokemonLength.useQuery(pokemonNames);
  // console.log("Bulbasaur and Ivysaur ", pokemons);
  console.log("Pokemons length ", pokemons?.length);
  console.log("Total Pages ", totalPages);

  return (
    <Stack direction={"column"} flexWrap={"wrap"}>
      {isPending ? (
        <CircularProgress />
      ) : (
        <Stack direction={"row"} flexWrap={"wrap"}>
          {pokemons!.map((pokemon) => {
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
      )}
      {totalPages != undefined && totalPages > 0 ? (
        <Pagination totalPages={Math.ceil(totalPages! / 4)} />
      ) : null}
    </Stack>
  );
}
