import { Box, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
    >
      <CircularProgress />
    </Box>
  );
}
