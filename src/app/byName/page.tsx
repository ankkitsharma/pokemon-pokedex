import { api, HydrateClient } from "~/trpc/server";
import PokemonForm from "../_components/PokemonForm";

export default async function page() {
  const allPokemons = await api.pokedex.getAllPokemonNames();
  return (
    <HydrateClient>
      <div>
        <PokemonForm allPokemons={allPokemons} />
      </div>
    </HydrateClient>
  );
}
