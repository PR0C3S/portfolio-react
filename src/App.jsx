import React, { useState } from "react";
import {
  AppBar,
  ButtonGroup,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const email = "johnhpena@gmail.com";
export default function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  function onChange(update) {
    setIsNightMode(update);
  }

  const myTheme = createTheme({
    palette: {
      mode: isNightMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AppBar
              position="fixed"
              color="default"
              sx={{
                top: "auto",
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              <ButtonGroup
                variant="contained"
                aria-label="Basic button group"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <IconButton
                  title={"GitHub"}
                  target="_blank"
                  href="https://www.github.com/PR0C3S"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  title={"LinkedIn"}
                  target="_blank"
                  href="https://www.linkedin.com/in/johnhpena/"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton title={"Contact"} href={`mailto:${email}`}>
                  <EmailIcon />
                </IconButton>
                <IconButton
                  title={"Download Resume"}
                  href={"./resume.pdf"}
                  download="John Harold Peña Acosta - RESUME ENGLISH.pdf"
                >
                  <DownloadIcon />
                </IconButton>

                {isNightMode ? (
                  <IconButton
                    title={"Change to Light Mode"}
                    onClick={() => onChange(false)}
                  >
                    <LightModeIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    title={"Change to Dark Mode"}
                    onClick={() => onChange(true)}
                  >
                    <DarkModeIcon />
                  </IconButton>
                )}
              </ButtonGroup>
            </AppBar>
          </Grid>
          <Grid item xs={12} mt={3}>
            <AboutMe />
          </Grid>
          <Grid item xs={12}>
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <Education />
          </Grid>
          <Grid item xs={12}>
            <Skills />
          </Grid>
          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Grid item xs={12} mb={5}>
            <Typography textAlign={"center"}>
              {`Designed by John Pena.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
