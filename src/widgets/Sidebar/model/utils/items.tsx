import { RoutePath } from "app/providers/router/ui/config";
import { MenuItemType } from "../types/MenuItemType";
import { ContainerOutlined, HomeOutlined, SolutionOutlined } from "@ant-design/icons";
import { getItem } from "../selectors/getItem";
import { IoNewspaperOutline } from "react-icons/io5";

export const items: MenuItemType[] = [
  getItem('Home', RoutePath.main, <HomeOutlined />),
  getItem('About', RoutePath.about, <SolutionOutlined />),
  getItem('News', RoutePath.news, <ContainerOutlined />),
  getItem('Latest news', RoutePath.latest, <IoNewspaperOutline />),
];