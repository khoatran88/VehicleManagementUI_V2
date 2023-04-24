import { Navigate, RouteObject } from 'react-router-dom'
import { Login } from 'src/pages'
import { privateRoutes } from 'src/routes/private-routes'

export const routesConfig: RouteObject[] = [
  ...privateRoutes(),
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]
