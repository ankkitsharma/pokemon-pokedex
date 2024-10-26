import Link from "next/link";

import styles from "./index.module.css";
import { Container, Stack, Typography } from "@mui/material";

export default async function Home() {
  return (
    <Container>
      <Typography
        variant="h1"
        align="center"
        color="yellow"
        sx={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        Welcome to the Pokédex!
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems={"center"}
        marginTop={10}
        flexWrap={"wrap"}
        sx={{ gap: 5 }}
      >
        <Link href="/byName" className={styles.Link}>
          Search by Name &nbsp;<span>-&gt;</span>
        </Link>
        <Link href="/byType" className={styles.Link}>
          Search by Type &nbsp;<span>-&gt;</span>
        </Link>
      </Stack>
    </Container>
  );
}
