# Pokémon Pokedex

This is a pokedex web app that allows users to view details of all Pokémon species.
Created using the TRPC, Nextjs, Prisma and Material UI

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

1. [Installation](#installation)
2. [Screenshots](#screenshots)
3. [API Endpoints](#api-endpoints)
4. [Roadmap](#roadmap)

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
![image](https://github.com/user-attachments/assets/9f587801-4fe1-4969-a2c4-a8faae8342eb)
![image](https://github.com/user-attachments/assets/6a6f7914-3289-48f7-8739-0420804f50bb)
![image](https://github.com/user-attachments/assets/ff216818-f236-4320-b6f3-8076a877e16e)




## API Endpoints

- `getPokemons`: Get pokemons by name.
- `getAllPokemonNames`: Get the names of all pokemons.
- `getAllTypes`: Get the types of all pokemons.
- `getPokemonByType`: Get pokemons by type.

## Roadmap

- [ ] Add Pagination
- [ ] Improve UI/UX design.
