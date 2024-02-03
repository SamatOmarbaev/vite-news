import { MainNews } from "pages/MainNews"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"
import { AppRoutes } from "shared/config/routes/routes"

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_NEWS]: '/',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_NEWS]: {
    path: RoutePath.news,
    element: <MainNews />
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}