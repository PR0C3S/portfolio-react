import { Grid, Typography } from "@mui/material";
import React from "react";
import MySkills from "../feactures/MySkills";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

export default function Skills() {
  return (
    <Grid container mt={10} id="Skills">
      <Grid item xs={12}>
        <Typography
          variant="h3"
          textAlign={"center"}
          color={"primary"}
          fontWeight={"bold"}
        >
          <HomeRepairServiceIcon fontSize="inheret" />
          SKILLS
        </Typography>
      </Grid>
      <MySkills />
    </Grid>
  );
}
