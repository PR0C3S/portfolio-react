import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { skills } from "../utils/Constants";

export default function MySkills() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        container
        rowSpacing={1}
        justifyContent={"center"}
        alignItems={"center"}
        mt={1}
      >
        {skills.map((skill) => {
          return (
            <Grid item container xs={6} md={3} key={skill.title}>
              <Box variant="outlined" component={Button} fullWidth ml={1}>
                <Grid
                  item
                  container
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Grid item xs={12}>
                    <img
                      src={skill.img}
                      alt={skill.title}
                      height={60}
                      width={60}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" fontWeight={"bold"}>
                      {skill.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">{skill.type}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
