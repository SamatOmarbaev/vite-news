import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "./config"
import { Loader } from "shared/ui/Loader"


export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route 
            key={path} 
            path={path} 
            element={element} 
          />
        ))}
      </Routes>
    </Suspense>
  )
}
