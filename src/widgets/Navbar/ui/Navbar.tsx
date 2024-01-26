import { Button, Layout } from "antd"
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import NewsLogo from 'shared/assets/logo.svg?react'
import UserIcon from 'shared/assets/user.svg?react'
import cls from './Navbar.module.css'
import { IconWrapper } from "shared/ui/IconWrapper";

export const Navbar = () => {
    return (
        <Layout.Header className={cls.headerStyle}>
            <ThemeSwitcher />
            <NewsLogo className={cls.logo} />
            <Button disabled type="link" size="middle" className={cls.userBtn}>
                <IconWrapper Svg={UserIcon} />
            </Button>
        </Layout.Header>
    )
}
