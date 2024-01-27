import { Select } from "antd"
import { useTheme } from "app/providers/ThemeProvider"
import IconMoon from 'shared/assets/moon.svg?react'
import IconSun from 'shared/assets/sun.svg?react'
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext"
import { IconWrapper } from "shared/ui/IconWrapper"
import { memo } from "react"


export const ThemeSwitcher = memo(() => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Select
            defaultValue={theme}
            variant="borderless"
            style={{ width: 50, height: 50, lineHeight: 0 }}
            onChange={toggleTheme}
            suffixIcon={null}
            options={[
                { value: Theme.DARK, label: <IconWrapper Svg={IconMoon} /> },
                { value: Theme.LIGHT, label: <IconWrapper Svg={IconSun} /> },
            ]}
        />
    )
})
