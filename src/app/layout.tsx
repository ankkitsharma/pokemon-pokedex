import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/app/_components/Navbar";
import { TRPCReactProvider } from "~/trpc/react";
import { Box, Toolbar } from "@mui/material";

export const metadata: Metadata = {
  title: "Pokemon Pokedex",
  description: "Search Pokemons by name or type",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <TRPCReactProvider>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Navbar />
            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />
              <div>{children}</div>
            </Box>
          </Box>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
