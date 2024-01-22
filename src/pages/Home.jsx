import React from "react";
import DetailHome from "../feactures/DetailHome";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container mt={10} id="Home">
      <DetailHome />
    </Grid>
  );
}
