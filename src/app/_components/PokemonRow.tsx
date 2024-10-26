"use client";
import { api } from "~/trpc/react";

export default function pokemonRow({ pokemonName }: { pokemonName: string }) {
  const { data: pokemon, isPending } = api.pokedex.getPokemon.useQuery({
    name: pokemonName,
  });

  // const {data:pokemons, isPending} =  api.pokedex.getPokemons.useQuery(["bulbasaur", "Ivysaur"]);
  // console.log("Bulbasaur and Ivysaur ", pokemons);
  return (
    <div>
      {isPending ? (
        "Loading..."
      ) : (
        <div>
          <h1>{pokemon?.name}</h1>
          <img src={pokemon?.sprite} alt={pokemon?.name} />
        </div>
      )}
    </div>
  );
}
