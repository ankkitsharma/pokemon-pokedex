"use client";
import {
  Autocomplete,
  Box,
  Container,
  TextField,
  Button,
  Chip,
} from "@mui/material";
import { useState } from "react";
import PokemonTable from "./PokemonTable";

export default function PokemonForm({
  allPokemons,
}: {
  allPokemons: { name: string }[];
}) {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [submittedPokemons, setSubmittedPokemons] = useState<string[]>([]);

  const handleAdd = () => {
    if (inputValue && !tags.includes(inputValue)) {
      console.log("input Value ", inputValue);
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleSubmit = () => {
    console.log("Submitted Pokemons ", tags);
    setSubmittedPokemons(tags);
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Autocomplete
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search By Name"
              name={"pokemon"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
          options={allPokemons.map((pokemon) => pokemon.name)}
          sx={{ width: 300 }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        />
        <Box>
          <Button className="add" onClick={handleAdd}>
            Add
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={() => setTags([])}>Clear Tags</Button>
          <Button onClick={() => setSubmittedPokemons([])}>
            Clear Pokemons
          </Button>
        </Box>
      </Box>
      <Box marginTop={2} display={"flex"} flexWrap={"wrap"} gap={1}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} onDelete={() => handleDelete(tag)} />
        ))}
      </Box>
      <Box marginTop={2}>
        {submittedPokemons.length > 0 ? (
          <PokemonTable pokemonNames={submittedPokemons} />
        ) : null}
      </Box>
    </Container>
  );
}
