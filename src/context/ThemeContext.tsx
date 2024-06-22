import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContext {
  isDarkMode: boolean;
  switchTheme: () => void;
}

const defaultThemeContext = {
  isDarkMode: false,
  switchTheme: () => {},
};

export const ThemeContext = createContext<ThemeContext>(defaultThemeContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const themeValue = localStorage.getItem("theme");
    const hasDarkPreference = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    if (!themeValue) {
      localStorage.setItem("theme", hasDarkPreference ? "dark" : "light");
      setIsDarkMode(hasDarkPreference);
    } else if (themeValue === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (themeValue === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode: isDarkMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
