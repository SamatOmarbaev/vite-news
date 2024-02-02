import { CSSProperties, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { NavbarItemsList } from "../../model/selectors/getItem";
import cls from './NavbarLow.module.css'

const styles: CSSProperties = {
  marginTop: '1rem',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontWeight: '900',
}

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
    <nav style={styles}>
      {itemList}
    </nav>
  )
})
