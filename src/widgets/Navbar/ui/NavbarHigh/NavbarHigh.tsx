import NewsLogo from 'shared/assets/logo.svg?react'
import { Button } from 'antd';
import { IconWrapper } from 'shared/ui/IconWrapper';
import UserIcon from 'shared/assets/user.svg?react'
import { CSSProperties, ReactNode, memo } from 'react';

const headerHighStyle: CSSProperties = {
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

interface NavbarHighProps {
    themeSwitcher?: ReactNode;
    langSwitcher?: ReactNode;
}

export const NavbarHigh = memo((props: NavbarHighProps) => {
  const {themeSwitcher, langSwitcher} = props

  return (
    <nav style={headerHighStyle}>
      {themeSwitcher}
      {langSwitcher}
      <NewsLogo style={logoStyle}/>
      <Button disabled type="link" size="middle" style={userBtn}>
        <IconWrapper Svg={UserIcon} />
      </Button>
    </nav>
  )
})
