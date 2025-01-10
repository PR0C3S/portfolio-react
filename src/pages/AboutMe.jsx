import React from "react";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import { Typewriter } from "react-simple-typewriter";

const data = {
  name: "John Pena",
  email: "johnhpena@gmail.com",
  position: [
    "Software Engineer",
    "Full stack developer",
    "Java, Node & React Specialist",
    "Bilingual (English & Spanish)",
  ],

  description: `Graduated in Software Engineering with a specialization in software development using Java,Node, React, and Spring Boot, and 3 years of experience in the field. My primary focus is on problem-solving, optimizing usability, and maximizing efficiency. I have extensive experience in Java-based backend development, particularly with the Spring Boot framework, and in building robust web applications. I am proficient in using Java and Spring Boot to design scalable, high-performance solutions, alongside creating dynamic front-end applications with React. My background includes working both independently and collaboratively in Agile environments using Scrum methodologies. I am a clear communicator, proactive, and fluent in both English and Spanish.`,
};
export default function AboutMe() {
  const { name, email, position, description } = data;
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      <Grid item xs={12} md={6}>
        <Avatar
          alt="Remy Sharp"
          src="/yo.png"
          sx={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item container xs={12} md={6} alignContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}>
            {` Hi, I'm`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color={"primary"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            {name}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" textAlign={"center"}>
            <Typewriter words={position} loop={0} cursor />
          </Typography>
        </Grid>
        <Grid item container xs={12} justifyContent={"center"} spacing={1}>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              href={"./resume.pdf"}
              download="John Harold Peña Acosta - RESUME ENGLISH.pdf"
            >
              Download Resume
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              href={`mailto:${email}`}
            >
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
      <Grid
        item
        container
        xs={12}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Typography variant="body2" textAlign={"justify"} paragraph>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
