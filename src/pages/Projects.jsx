import { Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "../feactures/Slider";
import ComputerIcon from "@mui/icons-material/Computer";

export default function Projects() {
  return (
    <Grid container mt={10} id="Projects">
      <Grid item xs={12}>
        <Typography
          variant="h3"
          textAlign={"center"}
          color={"primary"}
          fontWeight={"bold"}
        >
          <ComputerIcon fontSize="inheret" />
          PROJECTS
        </Typography>
      </Grid>
      <Slider />
    </Grid>
  );
}
