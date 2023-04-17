import { Navigate, RouteObject } from 'react-router-dom'
import { privateRoutes } from 'src/routes/private-routes'

export const routesConfig: RouteObject[] = [
  ...privateRoutes(),
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]
