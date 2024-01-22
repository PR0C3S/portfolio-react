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
import { Typewriter } from "react-simple-typewriter";
import resume from "../pdf/Resume_CV_John Pena.pdf";
import { description, mail, name, positions } from "../utils/Constants";

export default function DetailHome() {
  return (
    <Grid container mt={10} direction="row-reverse" justifyContent={"center"}>
      <Grid
        item
        container
        xs={12}
        md={4}
        rowSpacing={1}
        justifyContent={"center"}
      >
        <Grid item>
          <Avatar
            alt="John pena"
            src="/yo.png"
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={8}
        mt={1}
        rowSpacing={1}
        justifyContent={"center"}
      >
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
            Hi, I'm
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            component={"div"}
            textAlign={"center"}
            color={"primary"}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
            <Typewriter words={positions} loop={0} cursor={true} />
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography textAlign={"center"} color="text.secondary">
            {description}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
        >
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              download={"Resume_CV_John Pena"}
              href={resume}
            >
              Download Resume
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              href={`mailto:${mail}`}
            >
              Contact me
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent={"center"}>
          <Tooltip title="GitHub">
            <IconButton
              target="_blank"
              href="https://www.github.com/PR0C3S"
              size="large"
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Linkedin">
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/johnhpena/"
              size="large"
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
}
