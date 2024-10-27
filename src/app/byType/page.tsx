import { api, HydrateClient } from "~/trpc/server";
import FilterablePokedexTable from "../_components/FilterablePokedexTable";

export default async function page() {
  const allTypes = await api.pokedex.getAllTypes();
  return (
    <HydrateClient>
      <FilterablePokedexTable allTypes={allTypes} />
    </HydrateClient>
  );
}
