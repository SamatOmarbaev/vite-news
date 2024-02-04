import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { NavbarItemsList } from "../../model/selectors/getItem";
import cls from './NavbarLow.module.css'

export const NavbarLow = memo(() => {
  const itemList = useMemo(() => NavbarItemsList.map((item) => {
    return (
      <Link 
        to={item.path} 
        key={item.path} 
        className={cls.link}
      >
        {item.text}
      </Link>
    )
  }), []);

  return (
    <nav className={cls.navbar}>
      {itemList}
    </nav>
  )
})
