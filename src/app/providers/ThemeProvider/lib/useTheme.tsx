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
    // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    // let newTheme: Theme;
    // switch (theme) {
    // case Theme.DARK:
    //   newTheme = Theme.LIGHT
    //   break
    // case Theme.LIGHT:
    //   newTheme = Theme.ALT
    //   break
    // case Theme.ALT:
    //   newTheme = Theme.DARK
    //   break
    // default: 
    //   newTheme = Theme.LIGHT
    //   break
    // }
    setTheme?.(newTheme);
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {theme, toggleTheme} 
}  