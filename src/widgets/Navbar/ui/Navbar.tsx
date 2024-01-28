import { Button, Layout } from "antd"
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import NewsLogo from 'shared/assets/logo.svg?react'
import UserIcon from 'shared/assets/user.svg?react'
import { IconWrapper } from "shared/ui/IconWrapper";
import { CSSProperties, memo } from "react";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";

const headerStyle: CSSProperties = {
  width: '100%',
  padding: '0 1rem',
  height: 'var(--navbar-height)',
  background: 'var(--inverted-bg-color)',
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
}

const logoStyle: CSSProperties = {
  fill: 'var(--secondary-color)'
}

const userBtn: CSSProperties = {
  padding: 0,
  marginLeft: 'auto'
}

export const Navbar = memo(() => {
  return (
    <Layout.Header style={headerStyle}>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <NewsLogo style={logoStyle}/>
      <Button disabled type="link" size="middle" style={userBtn}>
        <IconWrapper Svg={UserIcon} />
      </Button>
    </Layout.Header>
  )
})
