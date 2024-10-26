"use client";
import { api } from "~/trpc/react";

export default function PokemonTable({
  pokemonNames,
}: {
  pokemonNames: string[];
}) {
  const { data: pokemons, isPending } =
    api.pokedex.getPokemons.useQuery(pokemonNames);
  // console.log("Bulbasaur and Ivysaur ", pokemons);
  return (
    <div>
      {isPending
        ? "Loading..."
        : pokemons!.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprite} alt={pokemon.name} />
              </div>
            );
          })}
    </div>
  );
}
