import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import styles from "./index.module.css";
import PokemonRow from "./_components/PokemonRow";
import PokemonTable from "~/app/_components/PokemonTable";
import PokemonForm from "~/app/_components/PokemonForm";

export default async function Home() {
  const allPokemons = await api.pokedex.getAllPokemons();

  console.log("All Pokemons", allPokemons);

  return (
    <HydrateClient>
      <main>
        <div>
          <PokemonForm allPokemons={allPokemons} />
        </div>
      </main>
    </HydrateClient>
  );
}
