import React from "react";
import {
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ProjectData({ data }) {
  const { title, code, visit, date, description, skills } = data;
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item container justifyContent={"right"} xs={4}>
            {code && (
              <Tooltip title="View code">
                <IconButton target="_blank" href={code}>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            )}
            {visit && (
              <Tooltip title="Visit">
                <IconButton target="_blank" href={visit}>
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="body1">
              {date}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"justify"}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item container justifyContent={"center"} spacing={2}>
            {skills.map((skill) => {
              return (
                <Grid item key={skill}>
                  <Chip
                    label={skill}
                    color="primary"
                    variant="outlined"
                    clickable
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
