import { RoutePath } from "app/providers/router/ui/config";
import { NavbarItemType } from "../types/NavbarItemType";

export const NavbarItemsList: NavbarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Home',
  },
  {
    path: RoutePath.news,
    text: 'News',
  },
  {
    path: RoutePath.latest,
    text: 'Latest News',
  },
];