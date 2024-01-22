import { Grid, Typography } from "@mui/material";
import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TimeLine from "../feactures/TimeLine";

export default function Experience() {
  return (
    <Grid container mt={10} id="Experience">
      <Grid item xs={12}>
        <Typography
          variant="h3"
          textAlign={"center"}
          color={"primary"}
          fontWeight={"bold"}
        >
          <WorkOutlineIcon fontSize="inheret" />
          EXPERIENCE
        </Typography>
        <TimeLine />
      </Grid>
    </Grid>
  );
}
