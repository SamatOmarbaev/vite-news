import { RoutePath } from "app/providers/router/ui/config";
import { MenuItemType } from "../types/MenuItemType";
import { HomeOutlined, SolutionOutlined } from "@ant-design/icons";
import { getItem } from "../selectors/getItem";

export const items: MenuItemType[] = [
  getItem('Главная', RoutePath.main, <HomeOutlined />),
  getItem('О нас', RoutePath.about, <SolutionOutlined />),
];