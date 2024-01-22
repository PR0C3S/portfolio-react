import React, { createContext, useContext, useState } from "react";

const defaultValue = {
  darkMode: false,
};
const DarkModeContext = createContext(defaultValue);
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
