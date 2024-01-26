import { memo } from 'react';
import cls from './Sidebar.module.css';
import { RoutePath } from 'app/providers/router/ui/config';
import { Link } from 'react-router-dom';

export const Sidebar = memo(() => {
    return (
       <div className={cls.Sidebar}>
            <Link to={RoutePath.main}>
                main
            </Link>
            <Link to={RoutePath.about}>
                about
            </Link>
       </div>
    )
})
