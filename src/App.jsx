import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import {
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import Experience from "./pages/Experience";
import { useDarkMode } from "./context/DarkModeContext";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

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
      <Header />
      <Container>
        <Home />
        <Experience />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
