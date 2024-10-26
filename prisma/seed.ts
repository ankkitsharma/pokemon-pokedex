// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const POKEMON_TYPES = [
    "Normal", "Fire", "Water", "Electric", "Grass", "Ice",
    "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug",
    "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
] as const;

type PokemonType = typeof POKEMON_TYPES[number];

interface PokemonData {
    name: string;
    types: PokemonType[];
}

// First 151 Pokemon with their types
const POKEMON_DATA: PokemonData[] = [
    { name: "Bulbasaur", types: ["Grass", "Poison"] },
    { name: "Ivysaur", types: ["Grass", "Poison"] },
    { name: "Venusaur", types: ["Grass", "Poison"] },
    { name: "Charmander", types: ["Fire"] },
    { name: "Charmeleon", types: ["Fire"] },
    { name: "Charizard", types: ["Fire", "Flying"] },
    { name: "Squirtle", types: ["Water"] },
    { name: "Wartortle", types: ["Water"] },
    { name: "Blastoise", types: ["Water"] },
    { name: "Caterpie", types: ["Bug"] },
    { name: "Metapod", types: ["Bug"] },
    { name: "Butterfree", types: ["Bug", "Flying"] },
    { name: "Weedle", types: ["Bug", "Poison"] },
    { name: "Kakuna", types: ["Bug", "Poison"] },
    { name: "Beedrill", types: ["Bug", "Poison"] },
    { name: "Pidgey", types: ["Normal", "Flying"] },
    { name: "Pidgeotto", types: ["Normal", "Flying"] },
    { name: "Pidgeot", types: ["Normal", "Flying"] },
    { name: "Rattata", types: ["Normal"] },
    { name: "Raticate", types: ["Normal"] },
    // Add more Pokemon as needed...
];

async function main() {
    console.log(`Start seeding ...`);

    // First, clean up existing data
    await prisma.pokemon.deleteMany();
    await prisma.pokemonType.deleteMany();

    // Create all Pokemon types
    console.log('Creating Pokemon types...');
    const createdTypes = await Promise.all(
        POKEMON_TYPES.map((type) =>
            prisma.pokemonType.create({
                data: { name: type },
            })
        )
    );

    console.log(`Created ${createdTypes.length} Pokemon types`);

    // Create all Pokemon with their types
    console.log('Creating Pokemon...');
    for (const pokemon of POKEMON_DATA) {
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            POKEMON_DATA.indexOf(pokemon) + 1
        }.png`;

        await prisma.pokemon.create({
            data: {
                name: pokemon.name,
                sprite: spriteUrl,
                types: {
                    connect: pokemon.types.map((type) => ({
                        name: type,
                    })),
                },
            },
        });
    }

    console.log(`Created ${POKEMON_DATA.length} Pokemon`);
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });