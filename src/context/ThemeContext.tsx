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
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
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
      setIsDarkMode(hasDarkPreference);
    } else if (themeValue === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode: isDarkMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
