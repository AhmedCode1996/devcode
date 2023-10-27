"use client";
import React, { useContext, useState, createContext, useCallback } from "react";

interface ThemeContextTypes {
  mode: string;
  setMode?: (mode: string) => void;
  handleMode: () => void; 
}

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");

  const handleMode = useCallback(() => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  const contextValue: ThemeContextTypes = {
    mode,
    setMode,
    handleMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContextProvider = () => useContext(ThemeContext);
