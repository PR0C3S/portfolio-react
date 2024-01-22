import React, { useState } from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import {
  Container,
  ThemeProvider,
  createTheme,
  colors,
  CssBaseline,
} from "@mui/material";
import NavBar from "./ui/NavBar";
import Experience from "./pages/Experience";
import { useDarkMode } from "./theme/DarkModeContext";

export default function App() {
  const { isDarkMode } = useDarkMode();
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <NavBar />
      </header>
      <Container>
        <Home />
        <Experience />
        <Skills />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}
