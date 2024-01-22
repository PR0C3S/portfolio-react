import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./theme/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
