import NewsLogo from 'shared/assets/logo.svg?react'
import { Button } from 'antd';
import { IconWrapper } from 'shared/ui/IconWrapper';
import UserIcon from 'shared/assets/user.svg?react'
import { ReactNode, memo } from 'react';
import cls from './NavbarHigh.module.css'

interface NavbarHighProps {
  themeSwitcher?: ReactNode;
  // langSwitcher?: ReactNode;
}

export const NavbarHigh = memo((props: NavbarHighProps) => {
  const {themeSwitcher} = props

  return (
    <nav className={cls.headerHigh}>
      {themeSwitcher}
      {/* {langSwitcher} */}
      <NewsLogo className={cls.logo}/>
      <Button disabled type="link" size="middle" className={cls.userBtn}>
        <IconWrapper Svg={UserIcon} />
      </Button>
    </nav>
  )
})
