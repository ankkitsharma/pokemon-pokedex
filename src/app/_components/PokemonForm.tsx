"use client";
import { Autocomplete, Box, Container, TextField, Button } from "@mui/material";
import useState from "react";

export default function PokemonForm({
  allPokemons,
}: {
  allPokemons: { name: string }[];
}) {
  return (
    <Container sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Autocomplete
          renderInput={(params) => (
            <TextField {...params} label="pokemon" name={"pokemon"} />
          )}
          options={allPokemons.map((pokemon) => pokemon.name)}
          sx={{ width: 300 }}
        />
        <Button className="add">Add</Button>
        <Button type="submit">Submit</Button>
      </Box>
    </Container>
  );
}
