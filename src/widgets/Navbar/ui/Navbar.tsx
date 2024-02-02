import { Layout } from "antd"
import { CSSProperties, memo } from "react";
import { NavbarHigh } from "./NavbarHigh/NavbarHigh";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { NavbarLow } from "./NavbarLow/NavbarLow";

const headerStyle: CSSProperties = {
  width: '100%',
  padding: '0 1rem',
  minHeight: 'var(--navbar-height)',
  background: 'var(--inverted-bg-color)',
}

export const Navbar = memo(() => {
  return (
    <Layout.Header style={headerStyle}>
      <NavbarHigh 
        themeSwitcher={<ThemeSwitcher />} 
        langSwitcher={<LanguageSwitcher />}
      />
      <NavbarLow />
    </Layout.Header>
  )
})
