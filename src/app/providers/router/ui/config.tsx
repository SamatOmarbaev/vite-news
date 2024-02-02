import { LatestNews } from "pages/LatestNews"
import { MainDetailsPage } from "pages/MainDetailsPage"
import { MainNews } from "pages/MainNews"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"
import { AppRoutes } from "shared/config/routes/routes"

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_NEWS]: '/',
  [AppRoutes.MAIN_DETAILS]: '/',
  [AppRoutes.LATEST_NEWS]: '/latest',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
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