import React from "react";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function InformationAsList({ data }) {
  const {
    companyLogo,
    companyName,
    position,
    location,
    date,
    responsibilities,
  } = data;
  return (
    <Grid
      item
      container
      spacing={2}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Grid
        item
        container
        xs={2}
        justifyContent={"flex-end"}
        alignContent={"center"}
      >
        <Grid item>
          <Avatar src={companyLogo} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        xs={5}
        alignContent={"center"}
        justifyContent={"flex-start"}
      >
        <Grid item xs={12}>
          <Typography variant="body1">{companyName}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="text.secondary">
            {position}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction={"row"} xs={5} justifyContent={"flex-end"}>
        <Grid item xs={12}>
          <Typography variant="body1" textAlign={"end"}>
            {location}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="text.secondary" textAlign={"end"}>
            {date}
          </Typography>
        </Grid>
      </Grid>

      {responsibilities && (
        <>
          <Grid item xs={2} />
          <Grid item container xs={10} spacing={1}>
            {responsibilities.map((resposability) => (
              <Grid item xs={12} key={resposability}>
                <Typography
                  variant="body2"
                  color={"text.secondary"}
                  textAlign={"justify"}
                >
                  -{resposability}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
}
