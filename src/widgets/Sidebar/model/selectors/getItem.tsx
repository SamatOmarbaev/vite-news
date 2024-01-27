import { Link } from "react-router-dom";
import { MenuItemType } from "../types/MenuItemType";

export function getItem(
  label: React.ReactNode,
  to: string,
  icon?: React.ReactNode,
  children?: MenuItemType[],
): MenuItemType {
  return {
    key: to,
    icon,
    children,
    label: <Link to={to}>{label}</Link>,
  } as MenuItemType;
}