import { AboutPage } from "pages/AboutPage"
import { NewPage } from "pages/LatestNewPage"
import { MainNews } from "pages/MainNews"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"
import { AppRoutes } from "shared/config/routes/routes"

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MAIN_NEWS]: '/news',
  [AppRoutes.NEW_PAGE]: '/news/',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.MAIN_NEWS]: {
    path: RoutePath.news,
    element: <MainNews />
  },
  [AppRoutes.NEW_PAGE]: {
    path: RoutePath.news_page + ':id',
    element: <NewPage />
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}