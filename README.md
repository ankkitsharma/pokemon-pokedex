# Pokémon Pokedex

This is a pokedex web app that allows users to view details of all Pokémon species.
Created using the TRPC, Nextjs, Prisma and Material UI.

## Hosted on

This project is hosted on Vercel. You can access it [here](https://pokemon-pokedex-one.vercel.app/).

## Built With

- Next.js
- TRPC
- Prisma
- Material UI
- NeonDB
- Vercel

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Screenshots](#screenshots)
4. [API Endpoints](#api-endpoints)
5. [Roadmap](#roadmap)

## Features

- Search Pokémon by name
- Filter Pokémon by type
- Pagination for browsing through Pokémon species
- Responsive design for mobile and desktop
- Fast and efficient data fetching using TRPC

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/ankkitsharma/pokemon-pokedex
   ```
2. Cd into the pokemon-pokedex folder
3. Install NPM packages:
   ```sh
   npm install
   ```
4. Put database url inside env

5. Run npm run db:generate

6. Seed the database:

   ```sh
   npm run db:seed
   ```

7. Start the development server:
   ```sh
   npm start
   ```

## Screenshots

![image](https://github.com/user-attachments/assets/95447f47-5673-42b1-a858-726c031c8fbb)
![image](https://github.com/user-attachments/assets/313c69c4-ecf4-410a-9256-adfab51e4a0a)



## API Endpoints

- `getPokemons`: Get pokemons by name.
- `getAllPokemonNames`: Get the names of all pokemons.
- `getAllTypes`: Get the types of all pokemons.
- `getPokemonByType`: Get pokemons by type.

## Roadmap

- [ ] Improve UI/UX design.
