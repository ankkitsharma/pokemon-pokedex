-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sprite" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pokemon_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PokemonToPokemonType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemons_name_key" ON "pokemons"("name");

-- CreateIndex
CREATE INDEX "pokemons_name_idx" ON "pokemons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_types_name_key" ON "pokemon_types"("name");

-- CreateIndex
CREATE INDEX "pokemon_types_name_idx" ON "pokemon_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToPokemonType_AB_unique" ON "_PokemonToPokemonType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToPokemonType_B_index" ON "_PokemonToPokemonType"("B");

-- AddForeignKey
ALTER TABLE "_PokemonToPokemonType" ADD CONSTRAINT "_PokemonToPokemonType_A_fkey" FOREIGN KEY ("A") REFERENCES "pokemons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToPokemonType" ADD CONSTRAINT "_PokemonToPokemonType_B_fkey" FOREIGN KEY ("B") REFERENCES "pokemon_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
