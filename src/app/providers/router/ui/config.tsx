import { LatestNews } from "pages/LatestNews"
import { MainDetailsPage } from "pages/MainDetailsPage"
import { MainNews } from "pages/MainNews"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"
import { AppRoutes } from "shared/config/routes/routes"

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MAIN_NEWS]: '/news',
  [AppRoutes.MAIN_DETAILS]: '/news/',
  [AppRoutes.LATEST_NEWS]: '/latest',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.MAIN_NEWS]: {
    path: RoutePath.news,
    element: <MainNews />
  },
  [AppRoutes.MAIN_DETAILS]: {
    path: RoutePath.news_details + ':id',
    element: <MainDetailsPage />
  },
  [AppRoutes.LATEST_NEWS]: {
    path: RoutePath.latest,
    element: <LatestNews />
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}