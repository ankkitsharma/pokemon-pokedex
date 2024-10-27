"use client";
import { Container } from "@mui/material";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokemonTable from "./PokemonTable";
import { api } from "~/trpc/react";
import { useState } from "react";

export default function FilterablePokedexTable({
  allTypes,
}: {
  allTypes: {
    name: string;
  }[];
}) {
  const [submittedTypes, setSubmittedTypes] = useState<string[]>([]);
  const { data: pokemonNameByType } =
    api.pokedex.getPokemonsByType.useQuery(submittedTypes);
  console.log(pokemonNameByType);

  return (
    <Container sx={{ mt: 2 }}>
      <PokemonTypeSelection
        setSubmittedTypes={setSubmittedTypes}
        allTypes={allTypes}
      />
      {pokemonNameByType != undefined ? (
        <PokemonTable pokemonNames={pokemonNameByType} />
      ) : null}
    </Container>
  );
}
