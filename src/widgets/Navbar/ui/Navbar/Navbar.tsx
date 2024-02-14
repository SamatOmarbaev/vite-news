import { Layout } from "antd"
import { memo } from "react";
import { NavbarHigh } from "../NavbarHigh/NavbarHigh";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { NavbarLow } from "../NavbarLow/NavbarLow";
import cls from './Navbar.module.css'

export const Navbar = memo(() => {
  return (
    <Layout.Header className={cls.header}>
      <NavbarHigh 
        themeSwitcher={<ThemeSwitcher />} 
      />
      <NavbarLow />
    </Layout.Header>
  )
})
