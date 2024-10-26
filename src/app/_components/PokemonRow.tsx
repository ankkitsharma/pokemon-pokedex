"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import { api } from "~/trpc/react";

const Type = styled("div")({
  color: "black",
  backgroundColor: "lightsteelblue",
  fontSize: 13,
  padding: 4,
  borderRadius: 4,
});

export default function PokemonRow({
  name,
  sprite,
  types,
}: {
  name: string;
  sprite: string;
  types: { name: string }[];
}) {
  return (
    <Box width={"fit-content"} p={2}>
      <Box sx={{ backgroundColor: "lightgray" }}>
        <img src={sprite} alt={name} />
      </Box>

      <Typography variant="h6" fontWeight={600}>
        {name}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        {types.map((type) => {
          return <Type key={type.name}>{type.name}</Type>;
        })}
      </Stack>
    </Box>
  );
}
