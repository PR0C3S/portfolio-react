import { Box, Typography } from "@mui/material";
import React from "react";
import { year } from "../utils/Constants";

export default function Footer() {
  return (
    <footer>
      <Box mt={10} justifyContent={"center"} color={"primary"} p={1}>
        <Typography textAlign={"center"}>
          &copy;Copyright {year} John Peña.
        </Typography>
      </Box>
    </footer>
  );
}
