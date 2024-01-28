import { FC, ReactNode, useMemo, useState } from "react"
import { Theme, ThemeContext } from "../lib/ThemeContext"
import { LOCAL_STORAGE_THEME_KEY } from "shared/const/localStorage"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {children} = props
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
