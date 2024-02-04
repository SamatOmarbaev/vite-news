import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "shared/const/localStorage";

export interface UseThemeResult {
  toggleTheme?: () => void;
  theme?: Theme;
}

export function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = (newTheme: Theme) => {
    setTheme?.(newTheme);
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {theme, toggleTheme} 
}  