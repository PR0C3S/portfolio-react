import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import { Link, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import MySkills from "./MySkills";

export default function DetailHome() {
  const name = "John Harold Peña Acosta";
  const position = "Full stack developer";
  const description =
    "A passionate fullstack developer from Dominican Republic 🇩🇴, I am a technology lover who is constantly looking for information, I really like sports and spending time with my friends.";

  return (
    <Grid container justifyContent={"center"} mt={3}>
      <Avatar
        alt="Remy Sharp"
        src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
        sx={{ width: 350, height: 350 }}
      />
      <Grid
        item
        container
        xs={8}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}>
            Hi, I'm
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" color={"primary"} textAlign={"center"}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}>
            {position}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" textAlign={"center"}>
            {description}
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent={"center"} spacing={1}>
          <Grid item>
            <Button variant="outlined" startIcon={<DownloadIcon />}>
              Download Resume
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" startIcon={<EmailIcon />}>
              Contact
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent={"center"}>
          <Tooltip title="GitHub">
            <IconButton target="_blank" href="https://www.github.com/PR0C3S">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Linkedin">
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/johnhpena/"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MySkills />
      </Grid>
      <Grid item xs={12}>
        <Slider />
      </Grid>
    </Grid>
  );
}
