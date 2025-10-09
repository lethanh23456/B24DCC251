import { useState, useEffect } from "react";


type ThemeType = "light" | "dark";

export function useTheme(defaultTheme: ThemeType = "light") {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
